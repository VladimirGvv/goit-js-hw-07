import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imageMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarkup);
gallery.addEventListener('click', onGalleryClick)


function createMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
       <div class="gallery__item">
            <a class="gallery__link" href="${preview}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `
        }) 
    .join('');
}

function onGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    };


    const instance = basicLightbox.create(
        `
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `
    );

    instance.show();

     document.addEventListener('keydown', (eventKeyboard) => {
    if (eventKeyboard.key === 'Escape') instance.close();
  });
}

