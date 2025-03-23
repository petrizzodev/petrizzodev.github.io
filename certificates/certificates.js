const certificatesData = {
    "python": {
        title: { es: "Programación en Python", en: "Python Programming" },
        certificates: [
            { name: { es: "Python Básico", en: "Basic Python" }, platform: "Alura", date: "2022", file: "diploma-python-basico.pdf" },
            { name: { es: "Funciones en Python", en: "Python Functions" }, platform: "Alura", date: "2024", file: "diploma-python-funciones.pdf" },
            { name: { es: "PIP en Python", en: "Python PIP" }, platform: "Alura", date: "2024", file: "diploma-python-pip.pdf" },
            { name: { es: "FastAPI con Python", en: "FastAPI with Python" }, platform: "Alura", date: "2024", file: "diploma-fastapi.pdf" }
        ]
    },
    "webDevelopment": {
        title: { es: "Desarrollo Web", en: "Web Development" },
        certificates: [
            { name: { es: "Fundamentos de Bootstrap", en: "Bootstrap Fundamentals" }, platform: "Udemy", date: "2022", file: "Bootsrap.pdf" },
            { name: { es: "Creación de Blogs con WordPress", en: "WordPress Blog Creation" }, platform: "Alura", date: "2024", file: "diploma-wordpress-blog.pdf" },
            { name: { es: "Temas en WordPress", en: "WordPress Themes" }, platform: "Alura", date: "2024", file: "diploma-wordpress-temas.pdf" },
            { name: { es: "WooCommerce con WordPress", en: "WooCommerce with WordPress" }, platform: "Alura", date: "2024", file: "diploma-woocommerce.pdf" }
        ]
    },
    "aws": {
        title: { es: "Certificaciones AWS", en: "AWS Certifications" },
        certificates: [
            { name: { es: "AWS Cloud Technical Essentials", en: "AWS Cloud Technical Essentials" }, platform: "AWS", date: "2024", file: "AWS-CloudTechnicalEssential.pdf" },
            { name: { es: "Introducción a AWS", en: "AWS Introduction" }, platform: "AWS", date: "2024", file: "AWS-Intro.pdf" },
            { name: { es: "Fundamentos de AWS", en: "AWS Fundamentals" }, platform: "AWS", date: "2024", file: "diploma-aws-fundamentos.pdf" }
        ]
    },
    "chatbotsAI": {
        title: { es: "Chatbots e Inteligencia Artificial", en: "Chatbots and AI" },
        certificates: [
            { name: { es: "Creación de chatbots con ChatGPT", en: "Creating Chatbots with ChatGPT" }, platform: "Alura", date: "2024", file: "diploma-chatgpt.pdf" },
            { name: { es: "Automatización con OpenAI API", en: "Automation with OpenAI API" }, platform: "Alura", date: "2024", file: "diploma-openai-api.pdf" }
        ]
    },
    "googleIT": {
        title: { es: "Soporte de TI de Google", en: "Google IT Support" },
        certificates: [
            { name: { es: "Soporte Técnico - Curso 1", en: "Technical Support - Course 1" }, platform: "Google & Coursera", date: "2024", file: "ITSupport1.pdf" },
            { name: { es: "Soporte Técnico - Curso 2", en: "Technical Support - Course 2" }, platform: "Google & Coursera", date: "2024", file: "ITSupport2.pdf" },
            { name: { es: "Soporte Técnico - Curso 3", en: "Technical Support - Course 3" }, platform: "Google & Coursera", date: "2024", file: "ITSupport3.pdf" },
            { name: { es: "Soporte Técnico - Curso 4", en: "Technical Support - Course 4" }, platform: "Google & Coursera", date: "2024", file: "ITSupport4.pdf" },
            { name: { es: "Soporte Técnico - Curso 5", en: "Technical Support - Course 5" }, platform: "Google & Coursera", date: "2024", file: "ITSupport5.pdf" }
        ]
    },
    "projectManagement": {
        title: { es: "Gestión de Proyectos de Google", en: "Google Project Management" },
        certificates: [
            { name: { es: "Gestión de Proyectos - Curso 1", en: "Project Management - Course 1" }, platform: "Google & Coursera", date: "2023", file: "ProjectMagangerGoogle1.pdf" },
            { name: { es: "Gestión de Proyectos - Curso 2", en: "Project Management - Course 2" }, platform: "Google & Coursera", date: "2023", file: "ProjectMagangerGoogle2.pdf" },
            { name: { es: "Gestión de Proyectos - Curso 3", en: "Project Management - Course 3" }, platform: "Google & Coursera", date: "2023", file: "ProjectMagangerGoogle3.pdf" },
            { name: { es: "Gestión de Proyectos - Curso 4", en: "Project Management - Course 4" }, platform: "Google & Coursera", date: "2023", file: "ProjectMagangerGoogle4.pdf" },
            { name: { es: "Gestión de Proyectos - Curso 5", en: "Project Management - Course 5" }, platform: "Google & Coursera", date: "2023", file: "ProjectMagangerGoogle5.pdf" },
            { name: { es: "Gestión de Proyectos - Curso 6", en: "Project Management - Course 6" }, platform: "Google & Coursera", date: "2023", file: "ProjectMagangerGoogle6.pdf" }
        ]
    }
};


function createCertificateCard(cert, currentLang) {
    return `
        <div class="certificate-card">
            <div class="certificate-info">
                <h3>${cert.name[currentLang]}</h3>
                <p class="platform">${cert.platform}</p>
                <p class="date">${cert.date}</p>
                <a href="./src/${cert.file}" target="_blank" class="btn small">
                    <i class="fas fa-file-pdf"></i> ${currentLang === 'es' ? 'Ver Certificado' : 'View Certificate'}
                </a>
            </div>
        </div>
    `;
}

function renderCertificates(lang = 'es') {
    const container = document.querySelector('.certificates-categories');
    container.innerHTML = '';

    Object.entries(certificatesData).forEach(([key, category]) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'certificate-category';
        categorySection.innerHTML = `
            <h2 class="category-title">${category.title[lang]}</h2>
            <div class="certificates-grid">
                ${category.certificates.map(cert => createCertificateCard(cert, lang)).join('')}
            </div>
        `;
        container.appendChild(categorySection);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    

    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.toggle('light-mode', savedTheme === 'light');
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeToggle.innerHTML = savedTheme === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';


    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        
        themeToggle.innerHTML = currentTheme === 'light' ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    });


    renderCertificates();
});

document.getElementById('translate-btn').addEventListener('click', () => {
    const currentLang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = currentLang;
    renderCertificates(currentLang);
});