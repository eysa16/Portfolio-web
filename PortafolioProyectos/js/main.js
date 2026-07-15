import {
    initializeMobileMenu
} from "./mobile-menu.js";

import {
    initializeNavigation
} from "./navigation.js";

import {
    initializeResumeTabs
} from "./resume-tabs.js";

import {
    initializePortfolioCarousel
} from "./portfolio-carousel.js";

function initializePortfolio() {
    initializeMobileMenu();
    initializeNavigation();
    initializeResumeTabs();
    initializePortfolioCarousel();
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializePortfolio
    );
} else {
    initializePortfolio();
}