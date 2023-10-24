import AddressHelper from "../Helpers/AddressHelper";
import "./EventMapMarkerPopup.css";

function EventMapMarkerPopup({ calendarEvent }) {

    return (
        <div className="marker-card">
            <h5>
                {calendarEvent.name}
            </h5>

            <p>
                {calendarEvent.description}
            </p>

            <p>
                {(calendarEvent.location.name && !(calendarEvent.location.name.startsWith(calendarEvent.location.streetNumber + " " + calendarEvent.location.streetName)))
                    ? <>{calendarEvent.location.name}<br /></>
                    : null
                }
                {AddressHelper.FormatAddress(calendarEvent.location)}
            </p>
            <a href={"/events/" + calendarEvent.id}>View</a>
        </div>
    );
}

export default EventMapMarkerPopup;