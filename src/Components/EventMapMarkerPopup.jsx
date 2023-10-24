import AddressHelper from "../Helpers/AddressHelper";
import "./EventMapMarkerPopup.css";

function EventMapMarkerPopup({ calendarEvent, includeDetails }) {

    return (
        <div className="marker-card">
            {includeDetails
                ?
                <>
                    <h5>
                        {calendarEvent.name}
                    </h5>

                    <p>
                        {calendarEvent.description}
                    </p>
                </>
                :
                null
            }
            <p>
                {(calendarEvent.location.name && !(calendarEvent.location.name.startsWith(calendarEvent.location.streetNumber + " " + calendarEvent.location.streetName)))
                    ? <>{calendarEvent.location.name}<br /></>
                    : null
                }
                {AddressHelper.FormatAddress(calendarEvent.location)}
            </p>
            {includeDetails
                ?
                <a href={"/events/" + calendarEvent.id}>View</a>
                :
                null
            }
        </div>
    );
}

export default EventMapMarkerPopup;