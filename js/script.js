document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll('.team-member .title');
    let isVisible = false;
    let interval;

    const toggleVisibility = () => {
        titles.forEach(title => {
            title.classList.toggle('visible', isVisible);
        });
        isVisible = !isVisible;
    };

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!interval) {
                    interval = setInterval(toggleVisibility, 800); // Toggle visibility every 1 seconds
                }
            } else {
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                    titles.forEach(title => title.classList.remove('visible')); // Ensure titles are not visible when out of view
                    isVisible = false; // Reset visibility state
                }
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2 // Adjust this value as needed
    });

    const aboutUsSection = document.querySelector('.about-us');
    observer.observe(aboutUsSection);
});
