import { useEffect, useState } from 'react';
import './NewEventView.css';
import LocationPicker from '../Components/LocationPicker';
import OverlayButton from '../Components/OverlayButton';

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



    return (<div className="new-event-container">
        <form className='display-flex-responsive'>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" defaultValue={nameInput} onChange={setNameInput} />
                </div>

                <div className='field'>
                    <label>Description</label>
                    <textarea placeholder="Description" defaultValue={descriptionInput} onChange={setDescriptionInput} />
                </div>

                <div className='field'>
                    <label>Location</label>
                    <LocationPicker InitialValue={locationInput} LocationChangedCallback={setLocationInput} />
                </div>
            </div>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Start Date</label>
                    <input type="date" placeholder="Start date" defaultValue={startDateInput} onChange={setStartDateInput} />
                </div>

                <div className='field'>
                    <label>Start Time</label>
                    <input type="time" placeholder="Start Time" defaultValue={startTimeInput} onChange={setStartTimeInput} />
                </div>

                <div className='field'>
                    <label>End Date</label>
                    <input type="date" placeholder="End date" defaultValue={endDateInput} onChange={setEndDateInput} />
                </div>

                <div className='field'>
                    <label>End Time</label>
                    <input type="time" placeholder="End time" defaultValue={endTimeInput} onChange={setEndTimeInput} />
                </div>

            </div>
            <div className='display-flex-column form-column centered-vertically'>
                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={isPhysicalInput} onChange={setIsPhysicalInput} />
                    <label>Physical</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={isVirtualInput} onChange={setIsVirtualInput} />
                    <label>Virtual</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={isPublicInput} onChange={setIsPublicInput} />
                    <label>Public</label>
                </div>

            </div>
        </form>
        <OverlayButton buttonClass="btn-primary" ioniconName="checkmark-outline" />
    </div>);
}

export default NewEventView;