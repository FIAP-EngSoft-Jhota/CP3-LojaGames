window.addEventListener('load', () => {
    const splash = document.getElementById('splashScreen');
    if (splash) {
        setTimeout(() => {
            splash.style.display = 'none';
        }, 3000);
    }
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const description = document.getElementById('description').value;

        if (name && email && description) {
            alert(`Obrigado, ${name}! Sua mensagem foi recebida em ${email}`);
            contactForm.reset();
        }
    });
}

document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const productName = card.querySelector('h3').textContent;

        e.target.textContent = '✓ Adicionado!';
        e.target.style.background = 'linear-gradient(135deg, #06B6D4, #7C3AED)';

        setTimeout(() => {
            e.target.textContent = 'Adicionar';
            e.target.style.background = '';
        }, 2000);
    });
});