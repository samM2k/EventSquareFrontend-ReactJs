import './Overlay.css'

function Overlay({ children, position }) {

    return (
        <div className={'overlay ' + position}>{children}</div>
    );
}

export default Overlay;