class FirestoreStorage {
    static async saveData(data) {
        try {
            // Compress selfies before saving to Firestore
            const compressedData = {
                ...data,
                selfies: await this.compressSelfies(data.selfies || []),
                hasSelfies: (data.selfies && data.selfies.length > 0) ? true : false
            };
            
            const docRef = await addDoc(collection(db, "visitors"), {
                ...compressedData,
                serverTimestamp: serverTimestamp()
            });
            
            return { 
                success: true, 
                id: docRef.id,
                message: 'Data saved to Firestore successfully'
            };
        } catch (error) {
            console.error("Error adding document: ", error);
            return { 
                success: false, 
                error: error.message 
            };
        }
    }

    static async compressSelfies(selfies) {
        if (!selfies || selfies.length === 0) return [];
        
        const compressed = [];
        for (let i = 0; i < selfies.length; i++) {
            // Reduce image quality and size for Firestore
            const compressedSelfie = await this.compressImage(selfies[i], 0.3, 400); // 30% quality, max width 400px
            compressed.push(compressedSelfie);
        }
        return compressed;
    }

    static compressImage(dataUrl, quality, maxWidth) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // Resize if too large
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }
                
                canvas.width = width;
                canvas.height = height;
                
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
            img.src = dataUrl;
        });
    }
}
