import renderReadyItem from "./renderReadyItem";
import appendChildToTargetElement from "./appendChildToTargetElement";

export default async function renderReadyItemsByURL(url) {
    // ... (previous code)

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const container = document.createElement("div");
        container.classList.add("ready__items", "container");

        // Create and append individual item elements to the container
        data.forEach(item => {
            const itemElement = renderReadyItem(item);
            container.appendChild(itemElement);
        });

        // Append the container to the target element
        appendChildToTargetElement(container, ".ready__items__wrapper");
            
        // Created title for READY ITEMS

        const showMore = document.createElement("a");
        showMore.classList.add("ready__items__show__more");
        showMore.innerHTML = `
        Показать ещё
        `;

        appendChildToTargetElement(showMore, ".ready__items__wrapper");

    } catch (error) {
        console.error('Error:', error);
    }
}
