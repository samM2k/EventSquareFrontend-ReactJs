import React, { useEffect, useState } from 'react';
import './MapView.css';

function MapView({ Markers, Zoom, Center }) {
    // const [map, setMap] = useState(null);
    let map = null;
    Center ??= { lat: 50, lng: 10 };
    Markers ??= [
        {
            position: { lat: 50, lng: 10 },
            popupContent: "Test marker"
        }
    ];

    Zoom ??= 4;


    async function initMap() {
        const { Map, InfoWindow } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary(
            "marker",
        );

        const infoWindow = new InfoWindow();

        map = new Map(document.getElementById("map"), {
            center: Center,
            zoom: Zoom,
            mapId: "DEMO_MAP_ID",
        });

        Markers.forEach(m => {
            var marker = new AdvancedMarkerElement({
                map,
                position: m.position,
                title: m.accessibilityTitle,
            });

            marker.addListener("click", ({ domEvent, latLng }) => {
                infoWindow.close();
                infoWindow.setContent(m.popupContent);
                infoWindow.open(marker.map, marker);
            });
        })

    }

    useEffect(() => {
        if (!map)
            initMap();
    }, [])


    return (
        <>
            <div id="map"></div>
        </>
    );
};

export default MapView;
