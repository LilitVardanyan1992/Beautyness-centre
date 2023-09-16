function renderReadyItem(item) {
    const { id, img, price, description, title, categories } = item;
    const readyItem = document.createElement("div");
    readyItem.classList.add("ready__item")
    readyItem.id = id;
    readyItem.innerHTML = `
        <div class="ready__item-img">
            <img src=${img} alt=${title}>
        </div>
      
        <div class="ready__item-about">
            <h3 class="ready__item-title">${title}</h3>
            <p class="ready__item-descr">${description}</p>
            <div class="ready__item__price__and__basket">
                <div class="ready__item-price">${price} руб</div>
                <div class="ready__item-basket">
                    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2911 5.37109H1V20.0002H14.2911V5.37109Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.12207 7.15493V3.40845C4.12207 2.07042 5.10329 1 6.26292 1H9.02818C10.1878 1 11.169 2.07042 11.169 3.40845V7.15493" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>В корзину</span>
                </div>
            </div>
        </div>
    `;
    return readyItem;
}

export default renderReadyItem;