document.addEventListener('mousemove', (e) => {
    const cursorTrail = document.querySelector('.cursor-trail');
    cursorTrail.style.left = `${e.pageX}px`;
    cursorTrail.style.top = `${e.pageY}px`;
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.querySelector('.cursor-trail').classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        document.querySelector('.cursor-trail').classList.remove('hovered');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Diğer açık içerikleri kapat
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.display = 'none';
                }
            });

            // Şu anki içeriği göster veya gizle
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
