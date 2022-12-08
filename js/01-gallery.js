import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(createGalleryMarkup(galleryItems));
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
     <div class="gallery__item">
        <a class="gallery__link" href="${original}">
             <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
             />
        </a>
     </div>`;
    })
    .join("");
  //   console.log(markup);
}
