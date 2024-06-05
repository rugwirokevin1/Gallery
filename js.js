document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const captionText = document.getElementById('caption');
        
        lightbox.style.display = 'block';
        lightboxImg.src = item.getAttribute('data-full');
        captionText.innerHTML = item.querySelector('.details h2').textContent;

        const closeBtn = document.querySelector('.lightbox .close');
        closeBtn.onclick = () => {
            lightbox.style.display = 'none';
        };

        lightbox.onclick = (e) => {
            if (e.target !== lightboxImg) {
                lightbox.style.display = 'none';
            }
        };
    });
});