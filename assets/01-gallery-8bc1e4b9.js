import{S as t}from"./vendor-c9def49e.js";document.addEventListener("DOMContentLoaded",function(){const e=[{small:"small-image1.jpg",large:"large-image1.jpg",alt:"Image 1"},{small:"small-image2.jpg",large:"large-image2.jpg",alt:"Image 2"}],g=document.querySelector(".gallery");e.forEach(l=>{const a=document.createElement("li");a.classList.add("gallery-item"),a.innerHTML=`<a class="gallery-link" href="${l.large}">
      <img class="gallery-image" src="${l.small}" alt="${l.alt}"></a>`,g.appendChild(a)}),new t(".gallery a")});
//# sourceMappingURL=01-gallery-8bc1e4b9.js.map
