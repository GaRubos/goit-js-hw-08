import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
function createGalleryCollection(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        `;
    })
    .join('');
}
const container = document.querySelector('.gallery');
const img = createGalleryCollection(galleryItems);
container.insertAdjacentHTML('beforeend', img);
container.addEventListener('click', nameImages);

function nameImages(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
  }
}
const lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: true,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 2,
});
