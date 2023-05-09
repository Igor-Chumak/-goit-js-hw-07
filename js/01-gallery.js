import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemREf = document.querySelector(".gallery");
let itemLightbox = {};

galleryItemREf.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));
galleryItemREf.addEventListener("click", targetImgClickHandle);

// galleryItemREf.onclick = (e) => {
//   e.preventDefault();
//   basicLightbox
//     .create(
//       `
//       <img src="${e.target.dataset.source}" width="1200" height="853">
//   `
//     )
//     .show();
// };

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `    <li class="gallery__item">
        <a class="gallery__link" href=${original}">
           <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>`;
    })
    .join("");
}

function targetImgClickHandle(e) {
  e.preventDefault();
  basicLightboxCreate(e.target.dataset.source);
}

function basicLightboxCreate(url) {
  itemLightbox = basicLightbox.create(
    `
      <img src="${url}" width="1200">
  `,
    {
      onClose: () => {
        basicLightboxClose();
      },
      onShow: () => {
        onEscKeyWhenLightboxShow();
      },
    }
  );
  console.log("itemLightbox", itemLightbox);
  itemLightbox.show();
}

function basicLightboxClose() {
  console.log("Lightbox is closed");
  window.removeEventListener("keydown", handlePressEscKey);
  return true;
}

function onEscKeyWhenLightboxShow() {
  console.log("lightbox now visible");
  window.addEventListener("keydown", handlePressEscKey);
}

function handlePressEscKey(e) {
  if (e.code !== "Escape") {
    return;
  }
  console.log("code: ", e.code);
  itemLightbox.close();
}
