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

    let scrollAmount = 0;
    const scrollStep = 320; // Adjust this based on image width

    function updateScroll() {
        const maxScroll = galleryContent.scrollWidth - galleryContent.clientWidth;
        scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));
        galleryContent.scrollLeft = scrollAmount; // Use scrollLeft instead of transform
    }

    nextBtn.addEventListener("click", function () {
        scrollAmount += scrollStep;
        updateScroll();
    });

    prevBtn.addEventListener("click", function () {
        scrollAmount -= scrollStep;
        updateScroll();
    });

    // ✅ SWIPE FUNCTIONALITY (Fix)
    let touchStartX = 0;
    let touchEndX = 0;

    galleryContent.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    galleryContent.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX;
        let swipeDistance = touchStartX - touchEndX;

        // Swipe left (next)
        if (swipeDistance > 50) {
            scrollAmount += scrollStep;
        } 
        // Swipe right (previous)
        else if (swipeDistance < -50) {
            scrollAmount -= scrollStep;
        }

        updateScroll();
        touchStartX = touchEndX; // Reset touch start
    });

    // Menu Toggle
    const menuBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active"); // Show/Hide menu
        });
    }
});
