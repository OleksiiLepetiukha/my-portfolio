// Burger menu
function burger() {
    const navbar = document.querySelector(".navbar");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}
