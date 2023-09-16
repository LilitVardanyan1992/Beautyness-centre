function burgerMenu() {
    const burgerMenu = document.querySelector(".nav__mobile__burger__menu");
    const datasClasses = [
        document.querySelector(".nav__top"),
        document.querySelector(".nav__bottom")
    ];

    burgerMenu.addEventListener("click", (event) => {
        if (burgerMenu.classList.contains("active")) {
            burgerMenu.classList.remove("active");
            burgerMenu.innerHTML = `
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.25" x2="20" y2="1.25" stroke="black" stroke-width="1.5"/>
            <line y1="7.25" x2="20" y2="7.25" stroke="black" stroke-width="1.5"/>
            <line y1="13.25" x2="12" y2="13.25" stroke="black" stroke-width="1.5"/>
            </svg>
        `;

            datasClasses.forEach(item => {
                item.style.cssText = `
                display: none`;
            })
            return;
        }
        burgerMenu.classList.add("active");
        burgerMenu.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
        `;
        datasClasses.forEach(item => {
            item.style.display = "flex";
        })
    })
}

export default burgerMenu;
