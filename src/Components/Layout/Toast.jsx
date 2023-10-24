import { useEffect, useState } from 'react';
import './Toast.css'

function Toast() {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("Some text inside the toast body");
    const [header, setHeader] = useState("Toast Header");
    const [minutesAgo, setMinutesAgo] = useState(0);

    useEffect(() => {
        window.Toast = (header, message) => {
            setHeader(header);
            setMessage(message);
            setMinutesAgo(0);
            setVisible(true);
        }
    }, [])

    if (visible) {
        setTimeout(() => setVisible(false), 10000)
        return (
            <div id="toast-container">
                <div id="toast" data-autohide="false">
                    <div className="toast-header">
                        <strong className="mr-auto text-primary">{header}</strong>
                        <small className="text-muted">{minutesAgo ? minutesAgo + " mins ago" : "Now"}</small>
                        <button onClick={() => setVisible(false)} type="button" className="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div className="toast-body">
                        {message}
                    </div>
                </div>
            </div>
        );
    }

    return <></>;
}

export default Toast;