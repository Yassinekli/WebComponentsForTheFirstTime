import './components/PhotoItem.js';
import './components/Album.js';

async function createPhotosAlbum() {
    let res = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
    let photos = await res.json();
    
    let container = document.querySelector('.container');
    let album = document.createElement('photo-album');
    
    container.appendChild(album);
    album.addTemplateContent(document.querySelector('#tmp').content);
    
    photos.forEach(photo => {
       let photoItem = document.createElement('photo-item');
       photoItem.photoContent = photo;
       album.addPhotoItem(photoItem);
    });
}

createPhotosAlbum();