import { useEffect, useState } from "react";
import MapView from "./MapView";

function EventsMapView({ Events }) {

    useEffect(() => {
        init()
    }, [])

    async function init() {
        const { Geocoder, GeocoderRequest } = await google.maps.importLibrary("geocoding")
        var gc = new Geocoder();
        var request = {
            address: formatLocation(Events[3].location)
        };
        var result = await gc.geocode(request);
        console.log(result);
    }

    var markers = [];



    var l = 10;
    var markersTemp = Events.map(e => {
        l += 10;
        return {
            position: {
                lat: l,
                lng: l
            },
            popupContent: getMarkupFromEvent(e)
        }
    });
    markers = markersTemp;

    return (
        <div><MapView Markers={markers} /></div>
    );
}

function getMarkupFromEvent(e) {
    var result = `
            <div>
                ${e.name}
            </div>
            <div>
                ${formatLocation(e.location)}
            </div>
        `;

    return result;
}

function formatLocation(locationObj) {
    try {
        var location = "";
        if (!locationObj)
            return location;

        if (locationObj.flatNumber != null)
            location += locationObj.flatNumber + "/";
        location += locationObj.streetNumber;
        location += " " + locationObj.streetName;
        location += ", " + locationObj.locality;
        location += ", " + locationObj.stateRegion;
        location += ", " + locationObj.country;

        return location;
    } catch (e) {
        return e.toString();
    }
}

export default EventsMapView