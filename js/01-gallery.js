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
    console.log(e.target);
    let imgClicked = e.target.dataset.
}
