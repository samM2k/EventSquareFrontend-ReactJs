import { useEffect, useState } from "react";
import MapView from "./MapView";

function EventsMapView({ Events }) {
    const [userLocation, setUserLocation] = useState(null);
    const [requestComplete, setRequestComplete] = useState(false)

    function positionReturnedCallback(position) {
        setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        setRequestComplete(true);
    }

    function positionFailedCallback(e) {
        console.log(e)
        setRequestComplete(true);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(positionReturnedCallback, positionFailedCallback);
    }, [])

    var markers = Events.filter(e => {
        let lat = e.location?.coordinates?.latitude;
        let long = e.location?.coordinates?.longitude;
        if (lat && long)
            return true;
    }).map(e => {
        return {
            position: {
                lat: e.location.coordinates.latitude,
                lng: e.location.coordinates.longitude
            },
            popupContent: getMarkupFromEvent(e)
        }
    });

    if (!requestComplete)
        return (
            <p>Fetching location...</p>)
    else
        return (
            <div><MapView Zoom={userLocation ? 10 : 3} Center={userLocation} Markers={markers} /></div>
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