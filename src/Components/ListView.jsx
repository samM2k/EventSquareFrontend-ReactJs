import OverlayButton from "./OverlayButton.jsx"
import { useNavigate } from "react-router-dom";
import './ListView.css';

function ListView({ IsAuthorized, children, AddEntryRoute }) {
    const navigate = useNavigate();
    return (
        <div className='list-view'>
            {
                IsAuthorized ?
                    <OverlayButton ioniconName="add" onClick={() => navigate(AddEntryRoute)} />
                    : null
            }
            {children}
        </div>
    );
}

export default ListView;