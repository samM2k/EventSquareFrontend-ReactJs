import ApiClient from "../Helpers/ApiClient";

class NewEventViewModel {

    constructor() {
        this.locationInput = null;
        this.nameInput = "";
        this.descriptionInput = "";
        this.startDateInput = "";
        this.startTimeInput = "";
        this.endDateInput = "";
        this.endTimeInput = "";
        this.isPhysicalInput = false;
        this.isVirtualInput = false;
        this.isPublicInput = false;
    }

    locationInput;
    nameInput;
    descriptionInput;
    startDateInput;
    startTimeInput;
    endDateInput;
    endTimeInput;
    isPhysicalInput;
    isVirtualInput;
    isPublicInput;

    submit = async () => {
        var calendarEvent = {
            name: this.nameInput,
            description: this.descriptionInput,
            startDateTime: this.startDateInput + "T" + this.startTimeInput + ":00",
            endDateTime: this.endDateInput + "T" + this.endTimeInput + ":00",
            isPhysical: this.isPhysicalInput,
            isVirtual: this.isVirtualInput,
            visibility: this.isPublicInput ? 2 : 0,
            location: this.locationInput,
            rsvps: [],
            owner: ""
        }

        console.log(calendarEvent)

        var result = await ApiClient.postEvent(calendarEvent);
        return result;
    }

}

export default NewEventViewModel