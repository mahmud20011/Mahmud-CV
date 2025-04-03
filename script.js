document.addEventListener("DOMContentLoaded", function () {
    // Dark mode toggle
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
        });
    }

    // Smooth scrolling for sidebar links
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({ top: targetElement.offsetTop - 50, behavior: "smooth" });
            }
        });
    });

    // Log if on the ansøgning page
    if (window.location.pathname.includes("ansøgning.html")) {
        console.log("You are on the Ansøgning page.");
    }

    // Simple hover animation for service cards
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease-in-out";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Redirect to ansøgning.html when clicking the application icon
    const applicationButton = document.getElementById("openApplication");

    if (applicationButton) {
        applicationButton.addEventListener("click", function () {
            window.location.href = "ansøgning.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Highlight the active sidebar icon dynamically
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".sidebar a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Contact Form Submission (Prevent empty fields)
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                event.preventDefault(); // Stop form submission
                alert("Please fill in all fields before submitting.");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Message sent! I will get back to you soon.");
            contactForm.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let sidebarLinks = document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});

