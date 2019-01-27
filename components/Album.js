
class Album extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    addPhotoItem(photoItem) {
        this.shadowRoot.appendChild(photoItem);
    }

    addTemplateContent(templateContent) {
        this.shadowRoot.appendChild(templateContent);
    }
}

customElements.define('photo-album', Album);