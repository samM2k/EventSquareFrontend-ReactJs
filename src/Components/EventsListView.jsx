import EventListItemView from "./EventListItemView";
import OverlayButton from "./OverlayButton.jsx"
import { useNavigate } from "react-router-dom";
import './EventsListView.css';

function EventsListView({ Events, IsAuthorized }) {
    const navigate = useNavigate();
    return (
        <div className='events-list-view'>
            {
                IsAuthorized ?
                    <OverlayButton ioniconName="add" onClick={() => navigate("/events/new")} />
                    : null
            }
            {
                Events.map(calendarEvent => {
                    return <EventListItemView key={calendarEvent.id} CalendarEvent={calendarEvent} />
                })
            }
        </div>
    );
}

export default EventsListView;