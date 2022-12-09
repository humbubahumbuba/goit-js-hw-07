import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

createMarkUp();

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  close: true,
});

function createMarkUp() {
  const markup = galleryItems
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
  gallery.insertAdjacentHTML("beforeend", markup);
}
