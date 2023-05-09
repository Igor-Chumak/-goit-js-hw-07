import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);
// Change code below this line
const ref = {
  galeryItem: document.querySelector(".gallery"),
};
const GalleryMarkup = createGalleryMarkup(galleryItems);

ref.galeryItem.insertAdjacentHTML("afterbegin", GalleryMarkup);
ref.galeryItem.addEventListener("click", targetImgClickHandle);

// function
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
  console.log(e.target.dataset.source);
  return e.target.dataset.source;
}

import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg" width="1280" height="1280">
`);

instance.show();
