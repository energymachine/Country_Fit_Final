document.addEventListener("DOMContentLoaded", function () {
    const workoutBoxes = document.querySelectorAll(".class-box");

    workoutBoxes.forEach(box => {
        const video = box.querySelector(".workout-video");
        const img = box.querySelector(".workout-img");

        box.addEventListener("mouseenter", () => {
            video.style.opacity = "1"; // Show video
            img.style.opacity = "0"; // Hide image
            video.play(); // Play video
        });

        box.addEventListener("mouseleave", () => {
            video.style.opacity = "0"; // Hide video
            img.style.opacity = "1"; // Show image
            video.pause(); // Pause video
            video.currentTime = 0; // Reset video to start
        });
    });


    // Fix for Gallery Scroll Issue
    const galleryContent = document.querySelector(".gallery-content");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery-content");
    let isDragging = false;
    let startX, scrollLeft;

    // Mouse & Touch Events
    gallery.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    gallery.addEventListener("mouseup", () => {
        isDragging = false;
    });

    gallery.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // Increase sensitivity
        gallery.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    gallery.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    gallery.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX;
        gallery.scrollLeft += (touchStartX - touchEndX) * 1.5; // Adjust sensitivity
        touchStartX = touchEndX;
    });
});


    let scrollAmount = 0;
    const scrollStep = 320; // Adjust this based on image width

    function updateScroll() {
        const maxScroll = galleryContent.scrollWidth - galleryContent.clientWidth;
        scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));
        galleryContent.style.transform = `translateX(-${scrollAmount}px)`;
    }

    nextBtn.addEventListener("click", function () {
        scrollAmount += scrollStep;
        updateScroll();
    });

    prevBtn.addEventListener("click", function () {
        scrollAmount -= scrollStep;
        updateScroll();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active"); // Show/Hide menu
        });
    }
});


