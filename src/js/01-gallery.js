import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



document.addEventListener("DOMContentLoaded", function () {
  const images = [
    { small: "small-image1.jpg", large: "large-image1.jpg", alt: "Image 1" },
    { small: "small-image2.jpg", large: "large-image2.jpg", alt: "Image 2" },
  ];

  const gallery = document.querySelector(".gallery");
  images.forEach(image => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery-item");
    galleryItem.innerHTML = `<a class="gallery-link" href="${image.large}">
      <img class="gallery-image" src="${image.small}" alt="${image.alt}"></a>`;
    gallery.appendChild(galleryItem);
  });

  new SimpleLightbox(".gallery a");
});
