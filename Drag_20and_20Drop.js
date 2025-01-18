function enableDragAndDrop(element) {
    let isDragging = false;
    let offsetX, offsetY;

    // Fungsi untuk memperbarui posisi elemen
    function updatePosition(x, y) {
        const parentRect = element.parentElement.getBoundingClientRect(); // Batas parent
        const elemWidth = element.offsetWidth;
        const elemHeight = element.offsetHeight;

        // Pastikan elemen tetap dalam batas layar
        const newX = Math.max(0, Math.min(parentRect.width - elemWidth, x));
        const newY = Math.max(0, Math.min(parentRect.height - elemHeight, y));

        element.style.left = newX + 'px';
        element.style.top = newY + 'px';
    }

    // Event handlers untuk desktop (mouse)
    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
        element.style.position = 'absolute'; // Pastikan posisi diatur absolute
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            updatePosition(x, y);
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    // Event handlers untuk perangkat sentuh (touch)
    element.addEventListener('touchstart', function (e) {
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - element.offsetLeft;
        offsetY = touch.clientY - element.offsetTop;
        element.style.position = 'absolute'; // Pastikan posisi diatur absolute
    });

    document.addEventListener('touchmove', function (e) {
        if (isDragging) {
            const touch = e.touches[0];
            const x = touch.clientX - offsetX;
            const y = touch.clientY - offsetY;
            updatePosition(x, y);
            e.preventDefault(); // Mencegah scroll saat drag
        }
    });

    document.addEventListener('touchend', function () {
        isDragging = false;
    });
}

// Jalankan fungsi drag-and-drop
document.addEventListener('DOMContentLoaded', function () {
    const draggableElement = document.getElementById('draggable'); // Pastikan elemen memiliki ID ini
    if (draggableElement) {
        enableDragAndDrop(draggableElement);
    }
});
