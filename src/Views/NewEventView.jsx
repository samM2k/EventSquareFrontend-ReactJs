import { useEffect, useState } from 'react';
import './NewEventView.css';
import LocationPicker from '../Components/Input/LocationPicker';
import OverlayButton from '../Components/OverlayButton';
import GrowableTextArea from '../Components/Input/GrowableTextarea';
import ApiClient from '../Helpers/ApiClient';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import NewEventViewModel from '../Models/NewEventViewModel';

function NewEventView() {
    const [model] = useState(new NewEventViewModel());

    const navigate = useNavigate();
    const { authModel } = useAuth();
    async function onSubmitNewEvent(result) {
        if (result.Success) {
            window.Toast("Event published", "You can now see your event under the \"My events\" section");
            navigate(-1)
        } else {
            //toast validation error
            console.log(result.Body)
            window.Toast("Failed to publish event", "There was an error processing your request.");
        }

    }

    if (!authModel.isAuthorized)
        return (
            <div>
                <p>Unauthorized, please login to access this page.</p>
            </div>
        );

    return (<div className="new-event-container">
        <form className='display-flex-responsive'>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" defaultValue={model.nameInput} onChange={(e) => model.nameInput = e.target.value} />
                </div>

                <div className='field'>
                    <label>Description</label>
                    <GrowableTextArea placeholder="Description" defaultValue={model.descriptionInput} onChange={(e) => model.descriptionInput = (e.target.value)} />
                </div>

                <div className='field'>
                    <label>Location</label>
                    <LocationPicker InitialValue={model.locationInput} LocationChangedCallback={(location) => model.locationInput = location} />
                </div>
            </div>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Start Date</label>
                    <input type="date" placeholder="Start date" defaultValue={model.startDateInput} onChange={(e) => model.startDateInput = (e.target.value)} />
                </div>

                <div className='field'>
                    <label>Start Time</label>
                    <input type="time" placeholder="Start Time" defaultValue={model.startTimeInput} onChange={(e) => model.startTimeInput = (e.target.value)} />
                </div>

                <div className='field'>
                    <label>End Date</label>
                    <input type="date" placeholder="End date" defaultValue={model.endDateInput} onChange={(e) => model.endDateInput = (e.target.value)} />
                </div>

                <div className='field'>
                    <label>End Time</label>
                    <input type="time" placeholder="End time" defaultValue={model.endTimeInput} onChange={(e) => model.endTimeInput = (e.target.value)} />
                </div>

            </div>
            <div className='display-flex-column form-column centered-vertically'>
                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={model.isPhysicalInput} onChange={(e) => model.isPhysicalInput = (e.target.checked)} />
                    <label>Physical</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={model.isVirtualInput} onChange={(e) => model.isVirtualInput = (e.target.checked)} />
                    <label>Virtual</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={model.isPublicInput} onChange={(e) => model.isPublicInput = (e.target.checked)} />
                    <label>Public</label>
                </div>

            </div>
        </form>
        <OverlayButton buttonClass="btn-primary" ioniconName="checkmark-outline" onClick={() => {
            model.submit().then(result => {
                onSubmitNewEvent(result);
            })
        }} />
    </div>);
}

export default NewEventView;