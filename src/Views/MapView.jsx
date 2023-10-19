import React, { useEffect, useState } from 'react';
import './MapView.css';

function MapView() {
    // const [map, setMap] = useState(null);
    let map;

    async function initMap() {
        const { Map, InfoWindow } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
            "marker",
        );

        const infoWindow = new InfoWindow();


        var position = { lat: -25.344, lng: 131.031 };


        map = new Map(document.getElementById("map"), {
            center: position,
            zoom: 12,
            mapId: "DEMO_MAP_ID",
        });

        var marker = new AdvancedMarkerElement({
            map,
            position: position,
            title: "Uluru national park- some extra text string",
        });

        marker.addListener("click", ({ domEvent, latLng }) => {
            const { target } = domEvent;

            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
        });
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
