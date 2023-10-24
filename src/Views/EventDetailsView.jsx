import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiClient from "../Helpers/ApiClient";

function EventDetailsView() {
    let { id } = useParams();
    const [calendarEvent, setCalendarEvent] = useState(null);
    const [loading, setLoading] = useState(true);

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
        <div>
            <p>Event ID: {calendarEvent.id}</p>
            <p>Event Name: {calendarEvent.name}</p>
            <p>Event Description: {calendarEvent.description}</p>
        </div>
    );

}

export default EventDetailsView;