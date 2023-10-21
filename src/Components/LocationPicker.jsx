import { useEffect, useState } from 'react';
import './LocationPicker.css'

function LocationPicker() {
    const [isLoading, setIsLoading] = useState(true);

    async function initMap() {
        const { Autocomplete } = await google.maps.importLibrary("places");
        const input = document.getElementById("pac-input");
        const options = {
            fields: ["formatted_address", "geometry", "name"],
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


            infowindowContent.children["place-name"].textContent = place.name;
            infowindowContent.children["place-address"].textContent =
                place.formatted_address;
        });


        // strictBoundsInputElement.addEventListener("change", () => {
        //     autocomplete.setOptions({
        //         strictBounds: strictBoundsInputElement.checked,
        //     });
        //     if (strictBoundsInputElement.checked) {
        //         biasInputElement.checked = strictBoundsInputElement.checked;
        //     }

        //     input.value = "";
        // });

        setIsLoading(false);
    }

    useEffect(() => {
        initMap();
    }, [])

    return (
        <>

            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3P1fNxX8nVhe7PbgLJJE-8o4fK-mixLk&libraries=places&v=weekly"
                defer
            ></script>
            <div className="pac-card" id="pac-card">
                <div>
                    <input id="pac-input" type="text" placeholder="Enter a location" />
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