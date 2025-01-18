function enableDragAndDrop(element) {
    let isDragging = false;
    let offsetX, offsetY;

    // Event handlers for desktop (mouse)
    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            element.style.left = (e.clientX - offsetX) + 'px';
            element.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    // Event handlers for mobile (touch)
    element.addEventListener('touchstart', function (e) {
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - element.offsetLeft;
        offsetY = touch.clientY - element.offsetTop;
    });

    document.addEventListener('touchmove', function (e) {
        if (isDragging) {
            const touch = e.touches[0];
            element.style.left = (touch.clientX - offsetX) + 'px';
            element.style.top = (touch.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('touchend', function () {
        isDragging = false;
    });
}
#draggable {
    touch-action: none; /* Disables default scrolling during touch events */
    border-radius: 10px;
}

// Apply drag-and-drop to the target element
document.addEventListener('DOMContentLoaded', function () {
    const draggableElement = document.getElementById('draggable'); // Replace with your element ID
    if (draggableElement) {
        enableDragAndDrop(draggableElement);
    }
});
