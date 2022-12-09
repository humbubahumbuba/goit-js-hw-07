import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

let modalImage;
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onImageClick);

createMarkUp();

function createMarkUp() {
  const markup = galleryItems.reduce(
    (acc, { preview, original, description }) => {
      acc += `<div class="gallery__item">
                  <a class="gallery__link" href="${original}">
                    <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                    />
                  </a>
                </div>`;
      return acc;
    },
    ""
  );
  gallery.insertAdjacentHTML("beforeend", markup);
}

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;
  const item = evt.target;
  onImageShow(item.dataset.source, item.alt);
}

function onImageShow(imageSrc, imageAlt) {
  modalImage = basicLightbox.create(
    `<img src="${imageSrc}" alt="${imageAlt}">`,
    {
      onShow: () => window.addEventListener("keydown", onImageEscClose),
    },
    {
      onClose: () => window.removeEventListener("keydown", onImageEscClose),
    }
  );
  modalImage.show();
}

function onImageEscClose(evt) {
  if (evt.code === "Escape") modalImage.close();
}
