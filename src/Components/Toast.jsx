import './Toast.css'

function Toast() {
    return (
        <div id="toast-container">
            <div id="toast" data-autohide="false">
                <div className="toast-header">
                    <strong className="mr-auto text-primary">Toast Header</strong>
                    <small className="text-muted">5 mins ago</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                </div>
                <div className="toast-body">
                    Some text inside the toast body
                </div>
            </div>
        </div>
    );
}

export default Toast;