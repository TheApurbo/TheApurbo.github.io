// Apurbo Chandro — Portfolio
// Lightweight interactions

document.addEventListener("DOMContentLoaded", () => {

    // Current year in footer
    const footer = document.querySelector("footer");

    if (footer) {
        const year = new Date().getFullYear();

        footer.querySelector("p").textContent =
            `© ${year} Apurbo Chandro`;
    }

    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
