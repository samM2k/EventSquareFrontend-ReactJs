export class ToastModel {

    constructor(visible, message, header, minutesAgo, setVisible, setMessage, setHeader, setMinutesAgo) {
        this.visible = visible;
        this.message = message;
        this.header = header;
        this.minutesAgo = minutesAgo;

        this.toast = (head, msg) => {
            setVisible(true);
            setMessage(msg);
            setHeader(head);
            setMinutesAgo(0);

            setTimeout(() => setVisible(false), 5000);
        };
    }

    visible;
    message;
    header;
    minutesAgo;
    toast;
}
