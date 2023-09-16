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
        
        let countItems = 6;
        let itemsRendered = 0;

        for (let i = 0; i < countItems; i++) {
            if (i < data.length) {
                const itemElement = renderReadyItem(data[i]);
                container.appendChild(itemElement);
                itemsRendered++;
            }
        }

        // Append the container to the target element
        appendChildToTargetElement(container, ".ready__items__wrapper");
            
        // Created title for READY ITEMS

        const showMore = document.createElement("a");
        showMore.classList.add("ready__items__show__more");
        showMore.innerHTML = `
        Показать ещё
        `;

        appendChildToTargetElement(showMore, ".ready__items__wrapper");
        
        showMore.addEventListener("click", () => {
            const newCountItems = itemsRendered + 3;
            for (let i = itemsRendered; i < newCountItems; i++) {
                if (i < data.length) {
                    const itemElement = renderReadyItem(data[i]);
                    container.appendChild(itemElement);
                    itemsRendered++;
                }
            }
            countItems = newCountItems;
        });

    } catch (error) {
        console.error('Error:', error);
    }
}
