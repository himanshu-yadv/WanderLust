mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    center: coordinates,
    zoom: 9,
    style: 'mapbox://styles/mapbox/streets-v11'
});

const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h4>${mapLocation}</h4><p>Exact Location will be provided after booking</p>`)
    .setMaxWidth("300px");

new mapboxgl.Marker({ color: 'red' })
    .setLngLat(coordinates)
    .setPopup(popup)
    .addTo(map);
