var map = L.map('map').setView([-34.41, 64.45], 15); // Coordenadas de latitud y longitud iniciales y nivel de zoom

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

