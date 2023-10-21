import { useEffect, useState } from 'react';
import './NewEventView.css';
import LocationPicker from '../Components/LocationPicker';

function NewEventView({ isAuthorized }) {
    const [viewportWidth, setViewportWidth] = useState(window.visualViewport.width);

    useEffect(() => {
        window.addEventListener("resize", () => setViewportWidth(window.visualViewport.width)), []
    });

    if (viewportWidth > 800)
        return (<div className="new-event-container">
            <form className='display-flex-row'>
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
                        <LocationPicker />
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
        </div>);

    return (
        <div className="new-event-container">
            <form className='display-flex-column'>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" />
                </div>

                <div className='field'>

                    <label>Description</label>
                    <textarea placeholder="Description" />
                </div>
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

                <div className='display-flex-row field'>
                    <input type="checkbox" />
                    <label>Physical</label>
                </div>
                <div className='field'>
                    <label>Location</label>
                    <LocationPicker />
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" />
                    <label>Virtual</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" />
                    <label>Public</label>
                </div>
            </form>
        </div>
    );
}

export default NewEventView;