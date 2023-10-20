import EventListItemView from "./EventListItemView";
import OverlayButton from "../Components/OverlayButton.jsx"
import { useNavigate } from "react-router-dom";

function EventsListView({ Events }) {
    const navigate = useNavigate();
    return (
        <div className='events-list-view'>
            <OverlayButton onClick={() => navigate("/events/new")} />
            {
                Events.map(calendarEvent => {
                    return <EventListItemView key={calendarEvent.id} CalendarEvent={calendarEvent} />
                })
            }
        </div>
    );
}

export default EventsListView;