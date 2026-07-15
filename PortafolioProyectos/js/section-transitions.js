export function createSectionTransitionController() {
    const header = document.querySelector("header");
    const barsBox = document.querySelector(".bars-box");
    const sections = document.querySelectorAll("section");
    const menuIcon = document.querySelector("#menu-icon");
    const navigation = document.querySelector("header nav");

    const isAvailable =
        header &&
        barsBox &&
        menuIcon &&
        navigation &&
        sections.length > 0;

    function resetPageState() {
        if (!isAvailable) {
            return;
        }

        header.classList.remove("active");

        window.setTimeout(() => {
            header.classList.add("active");
        }, 1100);

        barsBox.classList.remove("active");

        window.setTimeout(() => {
            barsBox.classList.add("active");
        }, 1100);

        sections.forEach((section) => {
            section.classList.remove("active");
        });

        menuIcon.classList.remove("bx-x");
        navigation.classList.remove("active");
    }

    function activateSection(sectionIndex) {
        const selectedSection = sections[sectionIndex];

        if (!selectedSection) {
            return;
        }

        resetPageState();

        window.setTimeout(() => {
            selectedSection.classList.add("active");
        }, 1100);
    }

    return {
        activateSection
    };
}