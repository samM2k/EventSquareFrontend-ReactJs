import { useEffect, useState } from 'react';
import './LocationPicker.css'

function LocationPicker({ LocationChangedCallback, InitialValue }) {
    const [isLoading, setIsLoading] = useState(true);

    async function initialize() {
        const { Autocomplete } = await google.maps.importLibrary("places");
        const input = document.getElementById("pac-input");
        const options = {
            fields: ["formatted_address", "geometry", "name", "address_components"],
            strictBounds: false,
        };

        const autocomplete = new Autocomplete(input, options);

        const infowindow = new google.maps.InfoWindow();
        const infowindowContent = document.getElementById("infowindow-content");

        infowindow.setContent(infowindowContent);


        autocomplete.addListener("place_changed", () => {
            infowindow.close();
            const place = autocomplete.getPlace();

            if (!place.geometry || !place.geometry.location) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            var location = {
                name: place.name,
                flatNumber: place.address_components.find(a => a.types.includes("subpremise"))?.short_name,
                streetNumber: place.address_components.find(a => a.types.includes("street_number"))?.short_name,
                streetName: place.address_components.find(a => a.types.includes("route"))?.short_name,
                locality: place.address_components.find(a => a.types.includes("locality"))?.short_name,
                stateRegion: place.address_components.find(a => a.types.includes("administrative_area_level_1"))?.short_name,
                postcode: place.address_components.find(a => a.types.includes("postal_code"))?.short_name,
                country: place.address_components.find(a => a.types.includes("country"))?.short_name,

            };


            infowindowContent.children["place-name"].textContent = place.name;
            infowindowContent.children["place-address"].textContent =
                place.formatted_address;

            LocationChangedCallback(location);
        });

        setIsLoading(false);
    }

    useEffect(() => {
        initialize();
    }, [])

    return (
        <>

            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3P1fNxX8nVhe7PbgLJJE-8o4fK-mixLk&libraries=places&v=weekly"
                defer
            ></script>
            <div className="pac-card" id="pac-card">
                <div className="input-container">
                    <input id="pac-input" type="text" placeholder="Enter a location" defaultValue={InitialValue?.name ?? ""} />
                    {
                        InitialValue != null ?
                            <ion-icon onClick={() => {
                                document.getElementById("pac-input").value = "";
                                LocationChangedCallback(null);
                            }} name="close-outline" size="small" class="clear-text-icon"></ion-icon>
                            :
                            null
                    }

                </div>
                <div id="infowindow-content">
                    <span id="place-name" className="title"></span><br />
                    <span id="place-address"></span>
                </div>
            </div>
        </>
    );
}

export default LocationPicker;