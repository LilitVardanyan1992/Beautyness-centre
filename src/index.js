import "./scss/styles.scss";
import burgerMenu from "./js/header/burgerMenu";
import swiperfunc from "./js/header/swiper";
import "./img/main-info.png";
import "./img/gotovie-nobori.jpg";
import "./img/corporative.jpg";
import "./img/nabor-individual.jpg";
import "./img/optovie.jpg";
import "./img/svadebni.jpg";
import "./img/sobrat-svoy-nabor.jpg";

// Start-Logic for appearing header section with nav section in all pages

function addHeaderAndNav(page) {
    fetch('navMenu.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
            swiperfunc();
            burgerMenu();
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

const pages = ["index", "gotovie",];
pages.forEach(page => {
    addHeaderAndNav(page);
})

try {
    document.querySelector(".gotovie1").addEventListener("click", () => {
        window.location.href = "gotovie.html";
    })
} catch {}

// End-Logic for appearing header section with nav section in all pages