function appendChildToTargetElement(element, className) {
    // Find the element in your HTML where you want to append the container
    const targetElement = document.querySelector(className);
     // Append the container to the target element
    
    if (targetElement) {
        targetElement.appendChild(element);
    } else {
        // console.error('Target element not found.');
    }
}

export default appendChildToTargetElement;