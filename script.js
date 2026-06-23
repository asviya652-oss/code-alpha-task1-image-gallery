let currentIndex = 0;
let visibleImages = [];

function openLightbox(img){
    document.getElementById("lightbox").style.display = "flex";
    visibleImages = [...document.querySelectorAll(".card")]
        .filter(card => card.style.display !== "none")
        .map(card => card.querySelector("img"));

    currentIndex = visibleImages.indexOf(img);
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function nextImage(){
    currentIndex = (currentIndex + 1) % visibleImages.length;
    document.getElementById("lightbox-img").src = visibleImages[currentIndex].src;
}

function prevImage(){
    currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
    document.getElementById("lightbox-img").src = visibleImages[currentIndex].src;
}

function filterImages(category){
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if(category === "all" || card.classList.contains(category)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}