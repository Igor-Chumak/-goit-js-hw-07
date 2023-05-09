import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);
// Change code below this line

const galleryItemREf = document.querySelector(".gallery");

galleryItemREf.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

galleryItemREf.onclick = (e) => {
  e.preventDefault();
};

//
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `    <li class="gallery__item">
        <a class="gallery__link" href=${original}">
           <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
           />
        </a>
    </li>`;
    })
    .join("");
}
