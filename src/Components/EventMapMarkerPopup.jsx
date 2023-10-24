import AddressHelper from "../Helpers/AddressHelper";

function EventMapMarkerPopup({ calendarEvent }) {
    return (
        <div className="marker-card">
            <div>
                {calendarEvent.name}
            </div>
            <div>
                {AddressHelper.FormatAddress(calendarEvent.location)}
            </div>
        </div>
    );
}

export default EventMapMarkerPopup;