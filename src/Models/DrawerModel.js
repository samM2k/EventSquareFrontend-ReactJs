export class DrawerModel {
    constructor(visible, content, show, hide, toggle, setContent) {
        this.visible = visible;
        this.content = content;
        this.show = show;
        this.hide = hide;
        this.toggle = toggle;
        this.setContent = setContent;
    }

    visible;
    content;
    show;
    hide;
    toggle;
    setContent;
}
