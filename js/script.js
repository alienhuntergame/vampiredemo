// === Gallery Slider ===
const galleryImgs = document.querySelectorAll('.gallery-img');
const galleryTrack = document.querySelector('.gallery-track');
const leftBtn = document.querySelector('.gallery-arrow.left');
const rightBtn = document.querySelector('.gallery-arrow.right');
let currentIdx = 0;

function showGalleryImg(idx) {
  galleryImgs.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
  });
  // Scroll to the active image
  const img = galleryImgs[idx];
  if (img) {
    img.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}
function nextImg() {
  currentIdx = (currentIdx + 1) % galleryImgs.length;
  showGalleryImg(currentIdx);
}
function prevImg() {
  currentIdx = (currentIdx - 1 + galleryImgs.length) % galleryImgs.length;
  showGalleryImg(currentIdx);
}
rightBtn.addEventListener('click', nextImg);
leftBtn.addEventListener('click', prevImg);
galleryImgs.forEach((img, idx) => {
  img.addEventListener('click', () => {
    currentIdx = idx;
    showGalleryImg(currentIdx);
  });
});
// Otomatik geçiş
setInterval(nextImg, 4000);

// === Scroll Down Button ===
const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
  scrollDown.addEventListener('click', () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  });
} 