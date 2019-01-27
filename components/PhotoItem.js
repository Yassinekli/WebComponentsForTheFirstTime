
class PhotoItem extends HTMLElement{
    set photoContent(photo){
        let index = photo.thumbnailUrl.lastIndexOf('/') + 1;
        let length = photo.thumbnailUrl.length;
        let color = '#' + photo.thumbnailUrl.substring(index, length);
        
        let photoTitle = document.createElement('h1');
        photoTitle.style.color = color;
        photoTitle.innerHTML = photo.title;

        let photoImg = document.createElement('img');
        photoImg.setAttribute('src', photo.thumbnailUrl);

        this.appendChild(photoTitle);
        this.appendChild(photoImg);
    }
}

customElements.define('photo-item', PhotoItem);