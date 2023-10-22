import { useEffect, useState } from 'react';
import './NewEventView.css';
import LocationPicker from '../Components/LocationPicker';
import OverlayButton from '../Components/OverlayButton';

function NewEventView({ isAuthorized }) {
    const [locationInput, setLocationInput] = useState(null);


    return (<div className="new-event-container">
        <form className='display-flex-responsive'>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" />
                </div>

                <div className='field'>
                    <label>Description</label>
                    <textarea placeholder="Description" />
                </div>

                <div className='field'>
                    <label>Location</label>
                    <LocationPicker InitialValue={locationInput} LocationChangedCallback={(loc) => {
                        console.log(loc);
                        setLocationInput(loc)
                    }} />
                </div>
            </div>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Start Date</label>
                    <input type="date" placeholder="Start date" />
                </div>

                <div className='field'>
                    <label>Start Time</label>
                    <input type="time" placeholder="Start date" />
                </div>

                <div className='field'>
                    <label>End Date</label>
                    <input type="date" placeholder="Start date" />
                </div>

                <div className='field'>
                    <label>End Time</label>
                    <input type="time" placeholder="Start date" />
                </div>

            </div>
            <div className='display-flex-column form-column centered-vertically'>
                <div className='display-flex-row field'>
                    <input type="checkbox" />
                    <label>Physical</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" />
                    <label>Virtual</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" />
                    <label>Public</label>
                </div>

            </div>
        </form>
        <OverlayButton buttonClass="btn-primary" ioniconName="checkmark-outline" />
    </div>);
}

export default NewEventView;