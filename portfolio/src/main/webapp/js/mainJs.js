// Functions for index.html
// This function will desploy an alert on mobile devices only
function mobileAlert() {
    alert("Hello Dear Stranger!\nAlex here, I noticed that you are checking my portfolio from your mobile and I wanted to suggest you to open it from your computer instead\nCheers!");
}

if (/Mobi/.test(navigator.userAgent)) {
    mobileAlert();
}

window.onload = function () {
    $("body").addClass("loaded");
};

// Anytime we clic on a link
function navLinkClick(webpage) {
    if ($(webpage.target).hasClass("external")) {
        return;
    }

    // Change page content
    $(`.tm-section-${previousImageId}`).fadeOut(function (webpage) {
        $(`.tm-section-${currentImageId}`).fadeIn();
        // Gallery
        if (currentImageId === 2) {
            setupSlider();
        }
    });
}

$(document).ready(function () {
    // Set first page
    $(".tm-section").fadeOut(0);
    $(".tm-section-0").fadeIn();


    bgCycle = $("body").backgroundCycle({
        imageUrls: [
            // Background image for Introduction
            "img/introduction.png"
        ],
        fadeSpeed: 2000,
        duration: -1,
        backgroundSize: SCALING_MODE_COVER
    });

    eachNavLink = $(".tm-nav-link");
    links = $(".tm-nav-links");

    // "Menu" open/close
    if (links.hasClass("open")) {
        links.fadeIn(0);
    } else {
        links.fadeOut(0);
    }

    $("#tm_about_link").on("click", navLinkClick);
    $("#tm_work_link").on("click", navLinkClick);

    // Each menu item click
    eachNavLink.on("click", navLinkClick);

    $(".tm-navbar-menu").click(function (e) {
        if (links.hasClass("open")) {
            links.fadeOut();
        } else {
            links.fadeIn();
        }

        links.toggleClass("open");
    });

    // window resize
    $(window).resize(function () {
        // If current page is Gallery page, set it up
        if (currentImageId === 2) {
            setupSlider();
        }
    });

});


// Functions for projects.html
