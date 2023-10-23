import './OverlayButton.css'
import Overlay from './Layout/Overlay.jsx';
function OverlayButton({ onClick, ioniconName, buttonClass }) {

    return (
        <Overlay position="bottom-right">
            <button onClick={onClick} className={"overlay-btn " + (buttonClass ?? "")}><ion-icon name={ioniconName} size="large"></ion-icon></button>
        </Overlay>
    );
}

export default OverlayButton;