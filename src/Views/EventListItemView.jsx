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

    return (
        <div key={CalendarEvent.id} className='event-card'>
            <div className=''>{CalendarEvent.name}</div>
            <div className=''>{getVisibilityString(CalendarEvent.visibility)}</div>
            {CalendarEvent.name}
        </div>
    );
}

export default EventListItemView;