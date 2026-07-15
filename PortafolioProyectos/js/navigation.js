import {
    createSectionTransitionController
} from "./section-transitions.js";

export function initializeNavigation() {
    const navigationLinks =
        document.querySelectorAll("header nav a");

    const logoLink = document.querySelector(".logo");
    const sectionButtons =
    document.querySelectorAll("[data-section-index]");

    if (navigationLinks.length === 0 || !logoLink) {
        return;
    }

    const { activateSection } =
        createSectionTransitionController();

    function clearActiveNavigationLinks() {
        navigationLinks.forEach((link) => {
            link.classList.remove("active");
        });
    }

    function navigateToSection(link, sectionIndex) {
        if (link.classList.contains("active")) {
            return;
        }

        clearActiveNavigationLinks();
        link.classList.add("active");

        activateSection(sectionIndex);
    }

    navigationLinks.forEach((link, sectionIndex) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            navigateToSection(link, sectionIndex);
        });
    });

    logoLink.addEventListener("click", (event) => {
        event.preventDefault();

        const homeLink = navigationLinks[0];

        if (!homeLink) {
            return;
        }

        navigateToSection(homeLink, 0);
    });

    sectionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const sectionIndex = Number(
            button.dataset.sectionIndex
        );

        const navigationLink =
            navigationLinks[sectionIndex];

        if (
            Number.isNaN(sectionIndex) ||
            !navigationLink
        ) {
            return;
        }

        navigateToSection(
            navigationLink,
            sectionIndex
        );
    });
});
}