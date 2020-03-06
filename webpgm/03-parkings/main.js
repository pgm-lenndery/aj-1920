const parkingDataAPI = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';

const ghentParkings = {
    init() {
        this.getParkingData();
        this.showParkingData();
        
        setInterval(() => {
            this.showParkingData();
        }, 1000 * 60 * 5);
    },
    
    async getParkingData() {
        try {
            let response = await fetch(parkingDataAPI)
            let data = await response.json();
            return data
        }
        catch {
            throw new Error('nieje mut')
        }
    },
    
    async showParkingData() {
        const apiData = await this.getParkingData();
        
        const parkingSpots = await document.querySelectorAll('.parkingSpot');
        if(parkingSpots.length > 0) {
            parkingSpots.forEach(popup => {
                popup.remove();
            })
        }
        
        apiData.forEach(i => {
            new mapboxgl.Popup({ closeOnClick: false, closeButton: false, className: 'parkingSpot' })
            .setLngLat([i.longitude, i.latitude])
            .setHTML(`
                <a href="https://www.google.com/maps/search/?api=1&query=${i.latitude},${i.longitude}" target="_blank">
                    <h2 class="parkingSpot-title">${i.description}</h2>
                    <ul>
                        <li>Capacity ${i.parkingStatus.totalCapacity}</li>
                        <li>${i.parkingStatus.availableCapacity} spots available</li>
                    </ul>
                </a>
            `)
            .addTo(map);
        });
    }
}


ghentParkings.init();