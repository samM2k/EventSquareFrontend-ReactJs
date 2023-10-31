import { useEffect, useState } from 'react';
import './NewEventView.css';
import ApiClient from '../Helpers/ApiClient';
import { useAuth } from '../AuthContext';
import EventForm from '../Components/Forms/EventForm';

function NewEventView() {
    const [locationInput, setLocationInput] = useState(null);
    const [nameInput, setNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [startDateInput, setStartDateInput] = useState("");
    const [startTimeInput, setStartTimeInput] = useState("");
    const [endDateInput, setEndDateInput] = useState("");
    const [endTimeInput, setEndTimeInput] = useState("");
    const [isPhysicalInput, setIsPhysicalInput] = useState(false);
    const [isVirtualInput, setIsVirtualInput] = useState(false);
    const [visibilityInput, setVisibilityInput] = useState('0');

    const setFieldValue = (field, value) => {
        switch (field) {
            case "name":
                setNameInput(value)
                break;
            case "description":
                setDescriptionInput(value)
                break;
            case "startDate":
                setStartDateInput(value)
                break;
            case "startTime":
                setStartTimeInput(value)
                break;
            case "endDate":
                setEndDateInput(value)
                break;
            case "endTime":
                setEndTimeInput(value)
                break;
            case "location":
                setLocationInput(value)
                break;
            case "isPhysical":
                setIsPhysicalInput(value)
                break;
            case "isVirtual":
                setIsVirtualInput(value)
                break;
            case "visibility":
                setVisibilityInput(value);
        }
    };

    const authModel = useAuth();

    const submit = async () => {
        var calendarEvent = {
            name: nameInput,
            description: descriptionInput,
            startDateTime: startDateInput + "T" + startTimeInput + ":00",
            endDateTime: endDateInput + "T" + endTimeInput + ":00",
            isPhysical: isPhysicalInput,
            isVirtual: isVirtualInput,
            visibility: visibilityInput,
            location: locationInput,
            rsvps: [],
            owner: ""
        }

        console.log(calendarEvent)

        var result = await ApiClient.postEvent(calendarEvent);
        return result;
    }



    if (!authModel.isAuthorized)
        return (
            <div>
                <p>Unauthorized, please login to access this page.</p>
            </div>
        );

    return (

        <div className="new-event-container">
            <EventForm defaultValues={{
                "name": nameInput,
                "description": descriptionInput,
                "location": locationInput,
                "startDate": startDateInput,
                "startTime": startTimeInput,
                "endDate": endDateInput,
                "endTime": endTimeInput,
                "visibility": visibilityInput,
                "isPhysical": isPhysicalInput,
                "isVirtual": isVirtualInput
            }}
                onSubmit={submit}
                onInputChanged={setFieldValue}
            />
        </div>);
}

export default NewEventView;