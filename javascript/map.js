// OpenFreeMap vector tiles rendered in MapLibre. No API key is required.
// The MapLibre library is loaded in contact.html and provides the global "maplibregl".
const container = document.querySelector('#service-map');
const fallback = document.querySelector('#map-fallback');

// PLACEHOLDER LOCATION: 140 Commercial Rd, Sidwell, Gqeberha (longitude, latitude)
const shopLocation = [25.5885287, -33.918636];
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=140%20Commercial%20Rd%2C%20Sidwell%2C%20Gqeberha%2C%206001%2C%20South%20Africa';

if (container) {
    if (typeof maplibregl === 'undefined') {
        // The library failed to load (offline, blocked or wrong URL).
        if (fallback) fallback.hidden = false;
    } else {
        try {
            const map = new maplibregl.Map({
                container,
                style: 'https://tiles.openfreemap.org/styles/liberty',
                center: shopLocation,
                zoom: 15,
                minZoom: 2,
                maxZoom: 18,
                scrollZoom: false,
                attributionControl: true
            });

            map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');

            const marker = new maplibregl.Marker({ color: '#2D5A43' })
                .setLngLat(shopLocation)
                .addTo(map);

            // Clicking (or pressing Enter/Space on) the pin opens the address in Google Maps.
            const pin = marker.getElement();
            const openGoogleMaps = () => window.open(mapsUrl, '_blank', 'noopener');
            pin.style.cursor = 'pointer';
            pin.setAttribute('role', 'link');
            pin.setAttribute('tabindex', '0');
            pin.setAttribute('aria-label', 'Open LengthHairCare address in Google Maps');
            pin.setAttribute('title', 'Open in Google Maps');
            pin.addEventListener('click', openGoogleMaps);
            pin.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openGoogleMaps();
                }
            });

            map.on('error', () => {
                if (fallback) fallback.hidden = false;
            });
        } catch (error) {
            if (fallback) fallback.hidden = false;
            container.setAttribute('aria-label', 'Map unavailable. LengthHairCare is at 140 Commercial Rd, Sidwell, Gqeberha, 6001.');
        }
    }
}