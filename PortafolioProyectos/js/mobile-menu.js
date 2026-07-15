export function initializeMobileMenu() {
    const menuIcon = document.querySelector("#menu-icon");
    const navigation = document.querySelector("header nav");

    if (!menuIcon || !navigation) {
        return;
    }

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navigation.classList.toggle("active");
    });
}