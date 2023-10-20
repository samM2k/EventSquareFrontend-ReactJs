import './EventListItemView.css';

function EventListItemView({ CalendarEvent }) {
    function parseDateTime(dt) {
        var date = new Date(Date.parse(dt))
        var returnString = "";
        returnString += date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        returnString += " " + date.getHours() + ":" + minutes;
        return returnString;
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

    return (
        <div key={CalendarEvent.id} className='event-card'>
            <div className='event-details'>
                <div className='event-name'>{CalendarEvent.name}</div>
                <div className='event-date'>{parseDateTime(CalendarEvent.startDateTime)} - {parseDateTime(CalendarEvent.endDateTime)}</div>
                <div className='event-location'>{formatLocation(CalendarEvent.location)}</div>
            </div>
            <div className='card-action'><button className='btn btn-dark'>View details</button></div>
        </div>
    );
}

export default EventListItemView;