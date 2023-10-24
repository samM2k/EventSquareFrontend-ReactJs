import { useParams } from "react-router-dom";

function EventDetailsView() {
    let { id } = useParams();

    return (
        <div>
            <p>Event ID: {id}</p>
        </div>
    );

}

export default EventDetailsView;