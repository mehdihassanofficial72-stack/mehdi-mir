/* =========================================================
   THE WISDOM SCHOOL & COLLEGE
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

    }


    /* =========================
       CLOSE MOBILE MENU
       WHEN LINK IS CLICKED
    ========================= */

    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }

        });

    });


    /* =========================
       NAVIGATION LINKS
       CLOSE MOBILE MENU
    ========================= */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }

        });

    });


    /* =========================
       ACTIVE NAVIGATION LINK
    ========================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =========================
       SCROLL TO TOP BUTTON
    ========================= */

    const scrollTopButton =
        document.querySelector(".scroll-top");

    if (scrollTopButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                scrollTopButton.classList.add("show");

            } else {

                scrollTopButton.classList.remove("show");

            }

        });


        scrollTopButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       HEADER SHADOW ON SCROLL
    ========================= */

    const header =
        document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }


    /* =========================
       SIMPLE REVEAL ANIMATION
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".highlight-card, .facility-card, .gallery-card, .contact-card"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* =========================
       IMAGE ERROR HANDLING
    ========================= */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.display = "none";

        });

    });


    /* =========================
       CONSOLE MESSAGE
    ========================= */

    console.log(
        "The Wisdom School & College website loaded successfully."
    );

});