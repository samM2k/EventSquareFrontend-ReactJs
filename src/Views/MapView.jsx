import React, { useEffect, useState } from 'react';
import './MapView.css';

function MapView() {
    const [map, setMap] = useState(null);

    async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        var position = { lat: -25.344, lng: 131.031 };
        var tempMap = new Map(document.getElementById("map"), {
            center: position,
            zoom: 12,
        });


        // The marker, positioned at Uluru
        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: 'Uluru'
        });

        setMap(tempMap);
    }

    useEffect(() => {
        if (!map)
            initMap();
    }, [])


    // useEffect(() => initMap(), []);


    return (
        <>
            <div id="map"></div>
        </>
    );
};

export default MapView;
