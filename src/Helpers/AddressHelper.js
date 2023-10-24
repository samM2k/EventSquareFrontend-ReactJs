class AddressHelper {
    static FormatAddress(locationObj) {
        try {
            var location = "";
            if (!locationObj)
                return location;

            if (locationObj.flatNumber != null)
                location += locationObj.flatNumber + "/";
            location += locationObj.streetNumber;
            location += " " + locationObj.streetName;
            location += ", " + locationObj.locality;
            location += ", " + locationObj.stateRegion;
            location += " " + locationObj.postcode;
            location += ", " + locationObj.country;

            return location;
        } catch (e) {
            return "";
        }
    }
}

export default AddressHelper