const kaart = L.map("kaart").setView([51.306526, 4.404553], 9);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
maxZoom: 15,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-bijdragers'}).addTo(kaart);
// een speld met een tekstballon
var mijnIcoon = L.divIcon({
    className: '',
    html: '<div style="background-color:#165e23; width:15px; height:15px; border-radius:50%; border:2px solid white;"></div>',
    iconSize: [19, 19],
    iconAnchor: [9, 9]
});
L.marker([51.306526, 4.404553], {
    icon: mijnIcoon
})
.addTo(kaart)
.bindPopup("Hoevenen")
.openPopup();