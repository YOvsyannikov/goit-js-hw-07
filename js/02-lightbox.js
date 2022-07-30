import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeGalleryItemsMarkup = (Arr) => {
  return Arr.map(
    (image) =>
      `
      <a class="gallery__item" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
        </a>
        `
  ).join("");
};

const galleryContainerRef = document.querySelector(".gallery");

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// -------------- Метод For Each --------------
// const gallery = document.querySelector(".gallery");
// const items = [];

// galleryItems.forEach((element) => {
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.href = element.original;
//   const galleryImage = document.createElement("img");
//   galleryImage.className = "gallery__image";
//   galleryImage.src = element.preview;
//   galleryImage.setAttribute("title", element.description);
//   galleryImage.alt = element.description;

//   galleryLink.append(galleryImage);
//   items.push(galleryLink);
// });
// gallery.append(...items);

// new SimpleLightbox(".gallery a", {
//   captionDelay: 250,
// });
