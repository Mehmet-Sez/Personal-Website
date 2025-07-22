

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
    if (currentHeaderIndex > headerImageArray.length + 1) {
        currentHeaderIndex = 0;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    } else {
        currentHeaderIndex += 1;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
}

function backwardHeaderArrow() {
    if (currentHeaderIndex === 0) {
        currentHeaderIndex = (headerImageArray.length + 2);
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    } else {
        currentHeaderIndex -= 1;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
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
    html.style.overflowY = "hidden";
}

function closeFullImage() {
    fullImageWrap.style.display = "none";
    html.style.overflowY = "scroll";
}



// SECTION FUNCTIONS
function openAboutSection() {
    if (currentSection != 0) {
        currentHeaderIndex = 0;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
        currentSection = 0;
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

function openPhotographySection() {
    if (currentSection != 1) {
        currentHeaderIndex = 1;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
        currentSection = 1;
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
    if (currentSection != 2) {
        currentHeaderIndex = 2;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
        currentSection = 2;
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
    if (currentSection != 3) {
        currentHeaderIndex = 3;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
        currentSection = 3;
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

function openContactsSection() {
    if (currentSection != 4) {
        currentHeaderIndex = 4;
        currentHeaderImage = headerImageCover.getElementsByTagName('img')[currentHeaderIndex];
        currentHeaderImage.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
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

// CONTACT FORM FUNCTIONS
let form = document.getElementById("form");
let result = document.getElementById("result");
let contactInnerBox = document.getElementById("contactInnerBox");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    form.style.display = "none";
    result.style.display = "flex";
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    })
        .then(async (response) => {
            let json = await response.json();
            setTimeout(() => {
                if (response.status == 200) {
                    result.style.display = "flex";
                    result.innerHTML = "MESSAGE SENT!";
                    form.style.display = "none";

                } else {
                    console.log(response);
                    result.style.display = "flex";
                    result.innerHTML = "MESSAGE SENT!";
                    form.style.display = "none";
                }
            }, 2500);
        })
        .catch((error) => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
                form.style.display = "flex";
            }, 5000);
        });
});