

let fullImageBox = document.getElementById("fullImageBox");
let fullImageWrap = document.getElementById("fullImageWrap");
let galleryArrowLeftFull = document.getElementById("galleryArrowLeftFull");
let galleryArrowRightFull = document.getElementById("galleryArrowRightFull");
let fullImage = document.getElementById("fullImage");
let contentBox = document.getElementById("contentBox");
let body = document.getElementById("body");
let header = document.getElementById("header");
let imageTitle = document.getElementById("imageTitle");
let imageDate = document.getElementById("imageDate");
let pic;
let imageTitleNew;
let imageDateNew;

// Section Variables
let sectionButtons = document.getElementById("sectionButon");

let photographySectionButton = document.getElementById("photographySectionButton");
let filmSectionButton = document.getElementById("filmSectionButton");
let digitalSectionButton = document.getElementById("digitalSectionButton");
let aboutSectionButton = document.getElementById("aboutSectionButton");
let contactsSectionButton = document.getElementById("contactsSectionButton");

let photographySection = document.getElementById("photographySection");
let filmSection = document.getElementById("filmSection");
let digitalSection = document.getElementById("digitalSection");
let aboutSection = document.getElementById("aboutSection");
let contactsSection = document.getElementById("contactsSection");

let currentSection = 0;
let clickedSection;

var imageArray = [];
var currentIndex;
var currentImage;
let nextImage;

function imageGallery(allDiv) {
    let totalImages = allDiv.getElementsByClassName("image-cover");
    imageArray = Array.from(totalImages);
}

function forwardArrow() {
    let nextIndex = ++currentIndex;
    nextImage = imageArray.at(nextIndex);
    if (nextIndex >= imageArray.length) {
        openFullImage(imageArray.at(0));
    } else {
        openFullImage(nextImage);
    }
}

function backwardArrow() {
    let nextIndex = --currentIndex;
    nextImage = imageArray.at(nextIndex);
    if (nextIndex === -1) {
        openFullImage(imageArray.at(imageArray.length - 1));
    } else {
        openFullImage(nextImage);
    }
}

function openFullImage(div) {
    imageGallery(div.parentElement);
    currentImage = div;
    currentIndex = div.id;
    pic = div.getElementsByClassName("image")[0];
    imageTitleNew = div.getElementsByClassName("imageTitleText")[0];
    imageDateNew = div.getElementsByClassName("imageDateText")[0];
    fullImage.src = pic.src;
    imageTitle.innerText = imageTitleNew.innerText;
    imageDate.innerText = imageDateNew.innerText;
    fullImageWrap.style.display = "flex";
    fullImageWrap.style.transition = "all 1s";
    fullImageBox.style.display = "flex";
    galleryArrowLeftFull.style.display = "flex";
    galleryArrowRightFull.style.display = "flex";
    fullImage.src = pic.src;
    imageTitle.innerText = imageTitleNew.innerText;
    imageDate.innerText = imageDateNew.innerText;
    contentBox.style.filter = "blur(5px)";
    body.style.height = "100%";
    body.style.overflowY = "hidden";
    header.style.filter = "blur(5px)";
}

function closeFullImage() {
    fullImageWrap.style.display = "none";
    fullImageBox.style.display = "none";
    galleryArrowLeftFull.style.display = "none";
    galleryArrowRightFull.style.display = "none";
    contentBox.style.filter = "blur(0px)";
    body.style.height = "0";
    body.style.overflowY = "scroll";
    header.style.filter = "blur(0px)";
}

function openPhotographySection() {
    if (currentSection != 0) {
        currentSection = 0;
        photographySection.style.display = "block";
        filmSection.style.display = "none";
        digitalSection.style.display = "none";
        aboutSection.style.display = "none";
        contactsSection.style.display = "none";
        photographySectionButton.className = photographySectionButton.className += " active";
        filmSectionButton.className = filmSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        digitalSectionButton.className = digitalSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        aboutSectionButton.className = aboutSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        contactsSectionButton.className = contactsSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
    }
}

function openFilmSection() {
    if (currentSection != 1) {
        currentSection = 1;
        photographySection.style.display = "none";
        filmSection.style.display = "block";
        digitalSection.style.display = "none";
        aboutSection.style.display = "none";
        contactsSection.style.display = "none";
        photographySectionButton.className = photographySectionButton.className.replace(/(?:^|\s)active(?!\S)/g , '' );
        filmSectionButton.className = filmSectionButton.className += " active";
        digitalSectionButton.className = digitalSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        aboutSectionButton.className = aboutSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        contactsSectionButton.className = contactsSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
    }
}

function openDigitalSection() {
    if (currentSection != 2) {
        currentSection = 2;
        photographySection.style.display = "none";
        filmSection.style.display = "none";
        digitalSection.style.display = "block";
        aboutSection.style.display = "none";
        contactsSection.style.display = "none";
        photographySectionButton.className = photographySectionButton.className.replace(/(?:^|\s)active(?!\S)/g , '' );
        filmSectionButton.className = filmSectionButton.className.replace(/(?:^|\s)active(?!\S)/g , '' );
        digitalSectionButton.className = digitalSectionButton.className += " active";
        aboutSectionButton.className = aboutSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        contactsSectionButton.className = contactsSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
    }
}

function openAboutSection() {
    if (currentSection != 3) {
        currentSection = 3;
        photographySection.style.display = "none";
        filmSection.style.display = "none";
        digitalSection.style.display = "none";
        aboutSection.style.display = "block";
        contactsSection.style.display = "none";
        photographySectionButton.className = photographySectionButton.className.replace(/(?:^|\s)active(?!\S)/g , '' );
        filmSectionButton.className = filmSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        digitalSectionButton.className = digitalSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        aboutSectionButton.className = aboutSectionButton.className += " active";
        contactsSectionButton.className = contactsSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
    }
}

function openContactsSection() {
    if (currentSection != 4) {
        currentSection = 4;
        photographySection.style.display = "none";
        filmSection.style.display = "none"
        digitalSection.style.display = "none";
        aboutSection.style.display = "none";
        contactsSection.style.display = "block";
        photographySectionButton.className = photographySectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        filmSectionButton.className = filmSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        digitalSectionButton.className = digitalSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        aboutSectionButton.className = aboutSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        contactsSectionButton.className = contactsSectionButton.className += " active";
    }
}