

let fullImageBox = document.getElementById("fullImageBox");
let fullImageWrap = document.getElementById("fullImageWrap");
let galleryArrowLeftFull = document.getElementById("galleryArrowLeftFull");
let galleryArrowRightFull = document.getElementById("galleryArrowRightFull");
let fullImage = document.getElementById("fullImage");
let contentBox = document.getElementById("contentBox");
let html = document.getElementById("html");
let body = document.getElementById("body");
let header = document.getElementById("header");
let imageTitle = document.getElementById("imageTitle");
let imageDate = document.getElementById("imageDate");
let pic;
let imageTitleNew;
let imageDateNew;

let headerImageBox = document.getElementById("headerImageBox");
let headerImageCover = document.getElementById("headerImageCover");
let currentHeaderIndex = 0;
let currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];

// document.querySelectorAll('.form-item input, .form-item textarea').forEach(input => {
//     const label = input.parentElement.querySelector('label');

//     input.addEventListener('focus', () => {
//         label.style.top = '-10px';
//         label.style.fontSize = 'clamp(0.25rem 5vw 3rem)';
//         label.style.color = 'white';
//     });

//     input.addEventListener('blur', () => {
//         if (input.value.trim() === '') {
//             if (input.tagName.toLowerCase() === 'textarea') {
//                 label.style.top = '75%';
//             } else {
//                 label.style.top = '50%';
//             }
//             label.style.fontSize = 'clamp(0.5rem 5vw 5rem)';
//             label.style.color = 'white';
//         }
//     });
// });

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
var headerImageArray = [5];
var currentIndex;
var currentImage;

// Hamburger Menu Variables
let hamburger = document.getElementById('hamburger');
let menu = document.getElementById('menu');
let overlay = document.getElementById('overlay');
let closeBtn = document.getElementById('closeBtn');



function toggleMenu() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Toggle menu on hamburger click
hamburger.addEventListener('click', toggleMenu);

// Close menu on close button click
closeBtn.addEventListener('click', toggleMenu);

// Close menu when clicking overlay
overlay.addEventListener('click', toggleMenu);

// Close menu when clicking menu items (optional)
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', toggleMenu);
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
        toggleMenu();
    }
});



function forwardHeaderArrow() {
    currentHeaderImage.className = currentHeaderImage.className.replace(/(?:^|\s)active-header(?!\S)/g, '');
    if (currentHeaderIndex > headerImageArray.length) {
        currentHeaderIndex = 0;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.className = currentHeaderImage.className += " active-header";
    } else {
        currentHeaderIndex += 1;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.className = currentHeaderImage.className += " active-header";
    }
}

function backwardHeaderArrow() {
    currentHeaderImage.className = currentHeaderImage.className.replace(/(?:^|\s)active-header(?!\S)/g, '');
    if (currentHeaderIndex === 0) {
        currentHeaderIndex = (headerImageArray.length + 1);
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.className = currentHeaderImage.className += " active-header";
    } else {
        currentHeaderIndex -= 1;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.className = currentHeaderImage.className += " active-header";
    }
}



// FULL IMAGE FUNCTIONS 
function imageGallery(allDiv) {
    let totalImages = allDiv.getElementsByTagName('img');
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
    pic = div.parentElement.getElementsByClassName("image")[currentIndex];
    fullImage.src = pic.src;
    fullImageWrap.style.display = "flex";
    fullImageWrap.style.transition = "all 1s";
    fullImage.src = pic.src;
    header.style.filter = "blur(5px)";
    contentBox.style.filter = "blur(5px)";
    html.style.overflowY = "hidden";
}

function closeFullImage() {
    fullImageWrap.style.display = "none";
    header.style.filter = "blur(0px)";
    contentBox.style.filter = "blur(0px)";
    html.style.overflowY = "scroll";
}



// SECTION FUNCTIONS

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
        photographySectionButton.className = photographySectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
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
        photographySectionButton.className = photographySectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
        filmSectionButton.className = filmSectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
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
        photographySectionButton.className = photographySectionButton.className.replace(/(?:^|\s)active(?!\S)/g, '');
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