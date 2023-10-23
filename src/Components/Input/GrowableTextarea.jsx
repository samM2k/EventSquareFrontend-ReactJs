import { useEffect } from "react";

function GrowableTextArea({ defaultValue, onChange, placeholder }) {

    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    useEffect(() => {
        var textarea = document.getElementById("autoresizing");
        textarea.addEventListener('input', autoResize, false);
    }, [])
    return (

        <textarea id="autoresizing" defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} />
    );
}

export default GrowableTextArea;