import { useEffect, useState } from 'react';
import './NewEventView.css';
import LocationPicker from '../Components/Input/LocationPicker';
import OverlayButton from '../Components/OverlayButton';
import GrowableTextArea from '../Components/Input/GrowableTextarea';
import ApiClient from '../Helpers/ApiClient';
import { useNavigate } from 'react-router-dom';

function NewEventView({ isAuthorized }) {
    const [locationInput, setLocationInput] = useState(null);
    const [nameInput, setNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [startDateInput, setStartDateInput] = useState("");
    const [startTimeInput, setStartTimeInput] = useState("");
    const [endDateInput, setEndDateInput] = useState("");
    const [endTimeInput, setEndTimeInput] = useState("");
    const [isPhysicalInput, setIsPhysicalInput] = useState(false);
    const [isVirtualInput, setIsVirtualInput] = useState(false);
    const [isPublicInput, setIsPublicInput] = useState(false);
    const navigate = useNavigate();

    async function submitNewEvent() {
        var calendarEvent = {
            name: nameInput,
            description: descriptionInput,
            startDateTime: startDateInput + "T" + startTimeInput + ":00",
            endDateTime: endDateInput + "T" + endTimeInput + ":00",
            isPhysical: isPhysicalInput,
            isVirtual: isVirtualInput,
            visibility: isPublicInput ? 2 : 0,
            location: locationInput,
            rsvps: [],
            owner: ""
        }

        console.log(calendarEvent)

        var result = await ApiClient.postEvent(calendarEvent);
        console.log(result);
        if (result.Success) {
            window.Toast("Event published", "You can now see your event under the \"My events\" section");
            navigate(-1)
        } else {
            //toast validation error
            console.log(result.Body)
            window.Toast("Failed to publish event", "There was an error processing your request.");
        }

    }

    return (<div className="new-event-container">
        <form className='display-flex-responsive'>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" defaultValue={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                </div>

                <div className='field'>
                    <label>Description</label>
                    <GrowableTextArea placeholder="Description" defaultValue={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
                </div>

                <div className='field'>
                    <label>Location</label>
                    <LocationPicker InitialValue={locationInput} LocationChangedCallback={setLocationInput} />
                </div>
            </div>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Start Date</label>
                    <input type="date" placeholder="Start date" defaultValue={startDateInput} onChange={(e) => setStartDateInput(e.target.value)} />
                </div>

                <div className='field'>
                    <label>Start Time</label>
                    <input type="time" placeholder="Start Time" defaultValue={startTimeInput} onChange={(e) => setStartTimeInput(e.target.value)} />
                </div>

                <div className='field'>
                    <label>End Date</label>
                    <input type="date" placeholder="End date" defaultValue={endDateInput} onChange={(e) => setEndDateInput(e.target.value)} />
                </div>

                <div className='field'>
                    <label>End Time</label>
                    <input type="time" placeholder="End time" defaultValue={endTimeInput} onChange={(e) => setEndTimeInput(e.target.value)} />
                </div>

            </div>
            <div className='display-flex-column form-column centered-vertically'>
                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={isPhysicalInput} onChange={(e) => setIsPhysicalInput(e.target.checked)} />
                    <label>Physical</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={isVirtualInput} onChange={(e) => setIsVirtualInput(e.target.checked)} />
                    <label>Virtual</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={isPublicInput} onChange={(e) => setIsPublicInput(e.target.checked)} />
                    <label>Public</label>
                </div>

            </div>
        </form>
        <OverlayButton buttonClass="btn-primary" ioniconName="checkmark-outline" onClick={submitNewEvent} />
    </div>);
}

export default NewEventView;