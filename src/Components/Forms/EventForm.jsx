
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../ToastContext';
import LocationPicker from '../Input/LocationPicker';
import OverlayButton from '../OverlayButton';
import GrowableTextArea from '../Input/GrowableTextarea';

function EventForm({ defaultValues, onInputChanged, onSubmit }) {
    const toastModel = useToast();
    const navigate = useNavigate();

    async function onSubmitNewEvent(result) {
        if (result.Success) {
            toastModel.toast("Event published", "You can now see your event published!");
            navigate(result.Body?.id ? `/events/${result.Body.id}` : navigate(-1))
        } else {
            //toast validation error
            console.log(result.Body)
            toastModel.toast("Failed to publish event", "There was an error processing your request.");
        }

    }
    return <>
        <form className='display-flex-responsive'>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" defaultValue={defaultValues.name} onChange={(e) => onInputChanged("name", e.target.value)} />
                </div>

                <div className='field'>
                    <label>Description</label>
                    <GrowableTextArea placeholder="Description" defaultValue={defaultValues.description} onChange={(e) => onInputChanged("description", e.target.value)} />
                </div>

                {(defaultValues.isPhysical) ?
                    <div className='field'>
                        <label>Location</label>
                        <LocationPicker InitialValue={defaultValues.location} LocationChangedCallback={(location) => onInputChanged("location", location)} />
                    </div>
                    : null}

            </div>
            <div className='display-flex-column form-column'>
                <div className='field'>
                    <label>Start Date</label>
                    <input type="date" placeholder="Start date" defaultValue={defaultValues.startDate} onChange={(e) => onInputChanged("startDate", e.target.value)} />
                </div>

                <div className='field'>
                    <label>Start Time</label>
                    <input type="time" placeholder="Start Time" defaultValue={defaultValues.startTime} onChange={(e) => onInputChanged("startTime", e.target.value)} />
                </div>

                <div className='field'>
                    <label>End Date</label>
                    <input type="date" placeholder="End date" defaultValue={defaultValues.endDate} onChange={(e) => onInputChanged("endDate", e.target.value)} />
                </div>

                <div className='field'>
                    <label>End Time</label>
                    <input type="time" placeholder="End time" defaultValue={defaultValues.endTime} onChange={(e) => onInputChanged("endTime", e.target.value)} />
                </div>

            </div>
            <div className='display-flex-column form-column centered-vertically'>
                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={defaultValues.isPhysical} onChange={(e) => onInputChanged("isPhysical", e.target.checked)} />
                    <label>Physical</label>
                </div>

                <div className='display-flex-row field'>
                    <input type="checkbox" defaultChecked={defaultValues.isVirtual} onChange={(e) => onInputChanged("isVirtual", e.target.checked)} />
                    <label>Virtual</label>
                </div>

                <div className='field'>
                    <label>Visibility</label>
                    <select defaultValue={defaultValues.visibility} onChange={(e) => onInputChanged("visibility", e.target.value)}>
                        <option value="0">Hidden</option>
                        <option value="1">Invite-Only</option>
                        <option value="2">Public</option>
                    </select>

                </div>

            </div>
        </form>
        <OverlayButton buttonClass="btn-primary" ioniconName="checkmark-outline" onClick={() => {
            onSubmit().then((result) => {
                onSubmitNewEvent(result);
            })
        }} />
    </>
}

export default EventForm