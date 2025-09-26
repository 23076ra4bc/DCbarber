class NetworkInfo {
    static async getNetworkInfo() {
        return {
            simOperator: await this.getSIMOperator(),
            wifiInfo: await this.getWifiInfo(),
            connectionType: this.getConnectionType(),
            networkInfo: await this.getNetworkInformation()
        };
    }

    static getConnectionType() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            return {
                type: connection.effectiveType,
                downlink: connection.downlink + ' Mbps',
                rtt: connection.rtt + ' ms',
                saveData: connection.saveData
            };
        }
        return 'Unknown';
    }

    static async getSIMOperator() {
        // SIM operator detection (limited browser support)
        if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection && 'operator' in connection) {
                return connection.operator;
            }
        }
        
        // Alternative method using IP-based carrier detection
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            return {
                carrier: data.org || 'Unknown',
                country: data.country_name,
                region: data.region
            };
        } catch (error) {
            return 'Unknown';
        }
    }

    static async getWifiInfo() {
        // WiFi name detection (limited support)
        if ('connection' in navigator) {
            const connection = navigator.connection;
            return {
                type: connection.effectiveType,
                strength: this.getSignalStrength()
            };
        }
        return 'Unknown';
    }

    static getSignalStrength() {
        // Signal strength estimation
        const connection = navigator.connection;
        if (connection && 'downlink' in connection) {
            if (connection.downlink > 10) return 'Excellent';
            if (connection.downlink > 5) return 'Good';
            if (connection.downlink > 2) return 'Fair';
            return 'Poor';
        }
        return 'Unknown';
    }

    static async getNetworkInformation() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            return {
                ip: data.ip,
                city: data.city,
                region: data.region,
                country: data.country_name,
                isp: data.org,
                timezone: data.timezone
            };
        } catch (error) {
            return { error: 'Network info unavailable' };
        }
    }
}