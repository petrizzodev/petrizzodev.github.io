// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const translateBtn = document.getElementById('translate-btn');
const translateText = document.getElementById('translate-text');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const currentYearEl = document.getElementById('current-year');
const body = document.body;

// Set current year
currentYearEl.textContent = new Date().getFullYear();

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    // Toggle between light and dark mode
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // Save preference to localStorage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Translations
const translations = {
    es: {
        "inicio": "Inicio",
        "sobre-mi": "Sobre Mí",
        "habilidades": "Habilidades",
        "proyectos": "Proyectos",
        "contacto": "Contacto",
        "hero-title": "Hola, soy Juan Perez",
        "hero-subtitle": "Desarrollador Full Stack",
        "hero-description": "Tecnólogo en Análisis y Diseño de Sistemas de Información, apasionado por resolver problemas con tecnología.",
        "ver-proyectos": "Ver Proyectos",
        "contactame": "Contáctame",
        "sobre-mi-title": "Sobre Mí",
        "about-p1": "Soy Tecnólogo en Análisis y Diseño de Sistemas de Información con experiencia en desarrollo web Full Stack. Me apasiona la tecnología y disfruto resolviendo problemas complejos con soluciones tecnológicas innovadoras.",
        "about-p2": "Mi enfoque abarca tanto el desarrollo frontend como backend, junto con automatización de pruebas. Busco constantemente expandir mis conocimientos y mejorar mis habilidades para crear aplicaciones robustas y escalables.",
        "habilidades-title": "Habilidades",
        "lenguajes-prog": "Lenguajes de Programación",
        "frameworks": "Frameworks y Librerías",
        "herramientas": "Herramientas y Tecnologías",
        "proyectos-title": "Proyectos",
        "tienda-desc": "Tienda web con Woocommerce. Implementación completa de tienda online con sistema de pagos, gestión de inventario y panel administrativo personalizado.",
        "personalizador-desc": "Permite al usuario crear diseños de productos personalizados para que la tienda estampe los productos y programe el envío. Incluye editor visual y sistema de gestión de pedidos.",
        "ver-demo": "Ver Demo",
        "contacto-title": "Contacto",
        "contacto-info": "Información de contacto",
        "nombre": "Nombre",
        "email": "Email",
        "mensaje": "Mensaje",
        "enviar-mensaje": "Enviar Mensaje",
        "derechos": "Todos los derechos reservados",
        "idiomas": "Idiomas",
        "ingles": "Inglés",
        "nivel-ingles": "B1 - Intermedio",
        "espanol": "Español",
        "nivel-espanol": "Nativo"
    },
    en: {
        "inicio": "Home",
        "sobre-mi": "About Me",
        "habilidades": "Skills",
        "proyectos": "Projects",
        "contacto": "Contact",
        "hero-title": "Hello, I'm Juan Perez",
        "hero-subtitle": "Full Stack Developer",
        "hero-description": "Information Systems Analysis and Design Technologist, passionate about solving problems with technology.",
        "ver-proyectos": "View Projects",
        "contactame": "Contact Me",
        "sobre-mi-title": "About Me",
        "about-p1": "I am an Information Systems Analysis and Design Technologist with experience in Full Stack web development. I am passionate about technology and enjoy solving complex problems with innovative technological solutions.",
        "about-p2": "My approach encompasses both frontend and backend development, along with test automation. I constantly seek to expand my knowledge and improve my skills to create robust and scalable applications.",
        "habilidades-title": "Skills",
        "lenguajes-prog": "Programming Languages",
        "frameworks": "Frameworks & Libraries",
        "herramientas": "Tools & Technologies",
        "proyectos-title": "Projects",
        "tienda-desc": "Web store with Woocommerce. Complete implementation of online store with payment system, inventory management and custom admin panel.",
        "personalizador-desc": "Allows users to create custom product designs for the store to print and schedule shipping. Includes visual editor and order management system.",
        "ver-demo": "View Demo",
        "contacto-title": "Contact",
        "contacto-info": "Contact Information",
        "nombre": "Name",
        "email": "Email",
        "mensaje": "Message",
        "enviar-mensaje": "Send Message",
        "derechos": "All rights reserved",
        "idiomas": "Languages",
        "ingles": "English",
        "nivel-ingles": "B1 - Intermediate",
        "espanol": "Spanish",
        "nivel-espanol": "Native"
    }
};

// Current language
let currentLang = 'es';

// Translation function
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update button text
    translateText.textContent = lang === 'es' ? 'English' : 'Español';
    
    // Update language
    currentLang = lang;
}

// Language toggle
translateBtn.addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    translatePage(newLang);
});

// Contact form submit
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real implementation, you would send the form data to a server
    // For now, let's just clear the form and show an alert
    
    const name = document.getElementById('name').value;
    alert(currentLang === 'es' ? 
        `Gracias ${name}, tu mensaje ha sido enviado.` : 
        `Thank you ${name}, your message has been sent.`);
    
    contactForm.reset();
});

// Animate progress bars when they come into view
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.width = entry.target.parentElement.getAttribute('data-value') || entry.target.getAttribute('style').match(/\d+/)[0] + '%';
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        // Reset width to 0
        const originalWidth = bar.getAttribute('style');
        bar.style.width = '0%';
        
        // Store original width as data attribute
        bar.parentElement.setAttribute('data-value', originalWidth);
        
        // Observe
        observer.observe(bar);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set default theme and language
    document.body.classList.add('dark-mode');
    currentLang = 'es';
    
    // Animate elements
    animateProgressBars();
});

// Disable right click on the entire page
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Disable text selection
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});

// Disable dragging
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

// Disable keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
    if (
        (e.ctrlKey && e.key === 's') || 
        (e.ctrlKey && e.key === 'u') || 
        (e.ctrlKey && e.shiftKey && e.key === 'i') ||
        e.key === 'F12'
    ) {
        e.preventDefault();
        return false;
    }
});