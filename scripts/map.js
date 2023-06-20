// Geolocation
function geoFindMe() {
    const status = document.querySelector(".status");
    const coordinates = document.querySelector('.coordinates')
    const map = L.map('myMap');

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "";
        coordinates.textContent = `Latitude: ${latitude} ° Longitude: ${longitude} °`;
        map.setView([latitude, longitude], 15);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <ahref="https://openstreetmap.org/copyright"> OpenStreetMap contributors</a>'
        }).addTo(map);


        var marker = L.marker([latitude, longitude]).addTo(map);
    }

    function error() {
        status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser";
    } else {
        status.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);


