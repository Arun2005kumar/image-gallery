let images = [
  "images/image1.jpeg",
  "images/image2.jpeg",
  "images/image3.jpeg",
  "images/image4.jpeg",
  "images/image5.jpeg",
  "images/image6.jpeg",
  "images/image7.jpeg",
];

let currentIndex = 0;

function openLightbox(index) {
  document.getElementById("lightbox").style.display = "block";
  currentIndex = index;
  showImage();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showImage() {
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

/* ⌨️ KEYBOARD CONTROL */
document.addEventListener("keydown", function(event) {
  let lightbox = document.getElementById("lightbox");

  if (lightbox.style.display === "block") {

    if (event.key === "ArrowRight") {
      nextImage();
    }

    if (event.key === "ArrowLeft") {
      prevImage();
    }

    if (event.key === "Escape") {
      closeLightbox();
    }
  }
});