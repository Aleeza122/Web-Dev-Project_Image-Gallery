let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let closeBtn = document.querySelector(".close");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let currentIndex = 0;

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    currentIndex = i;
    showImage();
    lightbox.style.display = "block";
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

// prev image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// close button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// buttons events
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);