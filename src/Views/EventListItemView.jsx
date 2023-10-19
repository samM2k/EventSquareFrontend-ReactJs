import './EventListItemView.css';

function EventListItemView({ CalendarEvent }) {
    function getVisibilityString(int) {
        switch (int) {
            case 0:
                return "Hidden";
            case 1:
                return "InviteOnly";
            case 2:
                return "Public";
        }
    }

    function parseDateTime(dt) {
        var date = new Date(Date.parse(dt))
        var returnString = "";
        returnString += date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        returnString += " " + date.getHours() + ":" + date.getMinutes();
        return returnString;
    }

    return (
        <div key={CalendarEvent.id} className='event-card'>
            <div className=''>{CalendarEvent.name}</div>
            <div className=''>{getVisibilityString(CalendarEvent.visibility)}</div>
            <div className=''>{parseDateTime(CalendarEvent.startDateTime)}</div>
        </div>
    );
}

export default EventListItemView;