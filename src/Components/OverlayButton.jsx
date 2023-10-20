import './OverlayButton.css'
import Overlay from './Overlay.jsx';
function OverlayButton({ onClick }) {

    return (
        <Overlay position="bottom-right">
            <button onClick={onClick} className="overlay-btn btn-dark"><ion-icon name="add" size="large"></ion-icon></button>
        </Overlay>
    );
}

export default OverlayButton;