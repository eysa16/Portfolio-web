export function initializePortfolioCarousel() {
    const arrowRight = document.querySelector(
        ".portfolio-box .navigation .arrow-right"
    );

    const arrowLeft = document.querySelector(
        ".portfolio-box .navigation .arrow-left"
    );

    const imageSlide = document.querySelector(
        ".portfolio-carousel .img-slide"
    );

    const portfolioDetails = document.querySelectorAll(
        ".portfolio-detail"
    );

    const portfolioImages = document.querySelectorAll(
        ".portfolio-carousel .img-item"
    );

    const isAvailable =
        arrowRight &&
        arrowLeft &&
        imageSlide &&
        portfolioDetails.length > 0 &&
        portfolioImages.length > 0;

    if (!isAvailable) {
        return;
    }

    let currentIndex = 0;

    const lastDetailIndex =
        portfolioDetails.length - 1;

    const lastImageIndex =
        portfolioImages.length - 1;

    const lastIndex = Math.min(
        lastDetailIndex,
        lastImageIndex
    );

    function updatePortfolio() {
        imageSlide.style.transform =
            `translateX(calc(${currentIndex * -100}% - ` +
            `${currentIndex * 2}rem))`;

        portfolioDetails.forEach((detail) => {
            detail.classList.remove("active");
        });

        const activeDetail =
            portfolioDetails[currentIndex];

        if (activeDetail) {
            activeDetail.classList.add("active");
        }

        arrowLeft.classList.toggle(
            "disabled",
            currentIndex === 0
        );

        arrowRight.classList.toggle(
            "disabled",
            currentIndex === lastIndex
        );
    }

    arrowRight.addEventListener("click", () => {
        if (currentIndex >= lastIndex) {
            return;
        }

        currentIndex += 1;
        updatePortfolio();
    });

    arrowLeft.addEventListener("click", () => {
        if (currentIndex <= 0) {
            return;
        }

        currentIndex -= 1;
        updatePortfolio();
    });

    updatePortfolio();
}