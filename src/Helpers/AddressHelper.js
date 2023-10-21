class LocationHelper {
    static TryFormatAddress(location) {
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

            return { success: true, output: location };
        } catch (e) {
            return { success: false, output: e.toString() };
        }
    }
}