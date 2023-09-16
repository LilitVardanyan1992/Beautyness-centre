import "../../../img/item1.jpg";
import "../../../img/item2.jpg";
import "../../../img/item3.jpg";
import "../../../img/item4.jpg";
import "../../../img/item5.jpg";
import "../../../img/item6.jpg";
import categories from "../../products-categories/categories";
import renderReadyItemsByURL from "./readyItemsComponents/renderReadyItemsByURL";
import appendChildToTargetElement from "./readyItemsComponents/appendChildToTargetElement";

export default function renderReadyItems(url) {

    // Created navigation for READY ITEMS

    const navMenuReadyItems = document.createElement("div");
    navMenuReadyItems.classList.add("ready__items__navigation");
    navMenuReadyItems.innerHTML = `
        <span>Главная</span> > Каталог > Готовые наборы
    `;

    appendChildToTargetElement(navMenuReadyItems, ".ready__items__wrapper");
    
    // Created title for READY ITEMS

    const titleReadyItems = document.createElement("h3");
    titleReadyItems.classList.add("ready__items__title");
    titleReadyItems.innerHTML = `
        Готовые наборы
    `;

    appendChildToTargetElement(titleReadyItems, ".ready__items__wrapper");

    // Created categories, which we can click and filter by category 

    const categoryItems = document.createElement("div");
    categoryItems.classList.add("category__items");

    categoryItems.innerHTML = categories.map(item => {
        return `<a class="category__item">${item}</a>`
    }).join("");
  
    appendChildToTargetElement(categoryItems, ".ready__items__wrapper");

    // READY ITEMS render function

    renderReadyItemsByURL(url);

}
