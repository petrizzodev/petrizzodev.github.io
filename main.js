
const themeToggle = document.getElementById('theme-toggle');
const translateBtn = document.getElementById('translate-btn');
const translateText = document.getElementById('translate-text');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const currentYearEl = document.getElementById('current-year');
const body = document.body;

currentYearEl.textContent = new Date().getFullYear();

themeToggle.addEventListener('click', () => {

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }


    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

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
    },
    "certificaciones": {
        "es": "Certificaciones",
        "en": "Certifications"
    },
    "certificaciones-title": {
        "es": "Certificaciones",
        "en": "Certifications"
    },
    "cert-python-ai": {
        "es": "Proyecto Python para IA y desarrollo de aplicaciones",
        "en": "Python Project for AI and Application Development"
    },
    "cert-python-flask": {
        "es": "Desarrollo de aplicaciones de IA con Python y Flask",
        "en": "AI Application Development with Python and Flask"
    },
    "cert-it-support": {
        "es": "Certificado de soporte de TI de Google",
        "en": "Google IT Support Certificate"
    },
    "cert-project-management": {
        "es": "Certificado de gestión de proyectos de Google",
        "en": "Google Project Management Certificate"
    },
    "ver-certificados": {
        "es": "Ver todos los certificados",
        "en": "View all certificates"
    },
    "certificados-title": {
        "es": "Certificados",
        "en": "Certificates"
    },
    "ver-certificado": {
        "es": "Ver Certificado",
        "en": "View Certificate"
    },
    "volver": {
        "es": "Volver",
        "en": "Back"
    }
};

let currentLang = 'es';

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
    

    translateText.textContent = lang === 'es' ? 'English' : 'Español';
    

    currentLang = lang;
}

translateBtn.addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    translatePage(newLang);
});

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
        
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert(currentLang === 'es' ? 'Mensaje enviado correctamente!' : 'Message sent successfully!');
            contactForm.reset();
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    } catch (error) {
        alert(currentLang === 'es' ? 
            'Error al enviar el mensaje. Por favor, intenta de nuevo.' : 
            'Error sending message. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
});

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
    
        const originalWidth = bar.getAttribute('style');
        bar.style.width = '0%';
        
    
        bar.parentElement.setAttribute('data-value', originalWidth);
        
    
        observer.observe(bar);
    });
}

document.addEventListener('DOMContentLoaded', () => {

    document.body.classList.add('dark-mode');
    currentLang = 'es';
    

    animateProgressBars();
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('keydown', (e) => {

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

function updateTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[key][lang];
            } else {
                element.textContent = translations[key][lang];
            }
        }
    });
}

document.getElementById('translate-btn').addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'es' ? 'en' : 'es';
    document.documentElement.lang = newLang;
    document.getElementById('translate-text').textContent = currentLang === 'es' ? 'Español' : 'English';
    updateTranslations(newLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const initialLang = document.documentElement.lang || 'es';
    updateTranslations(initialLang);
});