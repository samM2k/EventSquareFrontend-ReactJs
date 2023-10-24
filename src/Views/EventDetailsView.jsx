import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiClient from "../Helpers/ApiClient";
import MapView from "../Components/MapView";
import './EventDetailsView.css';
import ReactDOMServer from 'react-dom/server';
import EventMapMarkerPopup from "../Components/EventMapMarkerPopup";

function EventDetailsView() {
    let { id } = useParams();
    const [calendarEvent, setCalendarEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const getPopupHtml = (e) => {
        return ReactDOMServer.renderToString(<EventMapMarkerPopup includeDetails={false} calendarEvent={e} />);
    };
    useEffect(() => {
        if (id == null)
            return;
        ApiClient.getEvent(id).then((result) => {
            if (result.Success) {
                setCalendarEvent(result.Body);
            }

            setLoading(false);
        })
    }, []);

    if (loading)
        return <p>Loading...</p>;

    if (!calendarEvent) {
        return <p>Could not load event for ID: {id}</p>
    }

    return (
        <div className="grow-1">
            {calendarEvent.location != null
                ? <div className="single-event-map">
                    <MapView Markers={[{ position: { lat: calendarEvent.location.coordinates.latitude, lng: calendarEvent.location.coordinates.longitude }, popupContent: getPopupHtml(calendarEvent) }]} Center={{ lat: calendarEvent.location.coordinates.latitude, lng: calendarEvent.location.coordinates.longitude }} Zoom={14} />
                </div>
                : null
            }
            <div>
                <p>Event ID: {calendarEvent.id}</p>
                <p>Event Name: {calendarEvent.name}</p>
                <p>Event Description: {calendarEvent.description}</p>
            </div>
        </div>
    );

}

export default EventDetailsView;