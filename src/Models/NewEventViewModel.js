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
            name: model.nameInput,
            description: model.descriptionInput,
            startDateTime: model.startDateInput + "T" + model.startTimeInput + ":00",
            endDateTime: model.endDateInput + "T" + model.endTimeInput + ":00",
            isPhysical: model.isPhysicalInput,
            isVirtual: model.isVirtualInput,
            visibility: model.isPublicInput ? 2 : 0,
            location: model.locationInput,
            rsvps: [],
            owner: ""
        }

        console.log(calendarEvent)

        var result = await ApiClient.postEvent(calendarEvent);
        return result;
    }

}

export default NewEventViewModel