import "./scss/styles.scss";
import burgerMenu from "./js/header/burgerMenu";
import swiperfunc from "./js/header/swiper";
import renderReadyItems from "./js/main/readyItems/readyItems";
import "./img/main-info.png";
import "./img/gotovie-nobori.jpg";
import "./img/corporative.jpg";
import "./img/nabor-individual.jpg";
import "./img/optovie.jpg";
import "./img/svadebni.jpg";
import "./img/sobrat-svoy-nabor.jpg";


renderReadyItems("http://localhost:8888/readyItems");


// Start-Logic for appearing header section with nav section in all html pages

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

const pages = ["index", "readyItems",];

pages.forEach(page => {
    addHeaderAndNav(page);
})

try {
    document.querySelector(".ready__items").addEventListener("click", () => {
        window.open("readyItems.html", "_blank");
    })
} catch { }

// End-Logic for appearing header section with nav section in all pages