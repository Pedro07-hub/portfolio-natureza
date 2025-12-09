// ============================================
// PORTFÓLIO NATUREZA - FOTÓGRAFO
// ============================================

console.log("🌿 portfolio-natureza.js carregado com sucesso!");

// ============================================
// FUNÇÕES GERAIS
// ============================================

function elementExists(element) {
    return element !== null && element !== undefined;
}

// ============================================
// MENU MOBILE
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

if (elementExists(hamburger) && elementExists(navMenu)) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}

if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (elementExists(hamburger) && elementExists(navMenu)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
}

// ============================================
// FILTRO DA GALERIA
// ============================================

const filtroBtns = document.querySelectorAll('.filtro-btn');
const galeriaItems = document.querySelectorAll('.galeria-item');

if (filtroBtns.length > 0) {
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover classe active de todos os botões
            filtroBtns.forEach(b => b.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Filtrar itens da galeria
            galeriaItems.forEach(item => {
                if (filter === 'todos' || item.getAttribute('data-categoria') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================

const contactForm = document.getElementById('contatoForm');

if (elementExists(contactForm)) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simular envio
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Simular sucesso no envio
            alert('✅ Mensagem enviada com sucesso! Entrarei em contato em breve.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            console.log('📧 Formulário de contato enviado:', data);
        }, 1500);
    });
}

// ============================================
// NEWSLETTER
// ============================================

const newsletterForm = document.querySelector('.newsletter-form');

if (elementExists(newsletterForm)) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        
        if (emailInput.value) {
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i>';
            submitBtn.style.background = '#2ecc71';
            
            setTimeout(() => {
                alert('🎉 Obrigado por se inscrever! Você receberá nossas novidades em breve.');
                emailInput.value = '';
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 1000);
            
            console.log('📬 Newsletter inscrição:', emailInput.value);
        }
    });
}

// ============================================
// NAVEGAÇÃO SUAVE E HEADER
// ============================================

if (navLinks.length > 0) {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Header com sombra ao rolar
const header = document.getElementById('header');
if (elementExists(header)) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================

const backToTop = document.getElementById('backToTop');

if (elementExists(backToTop)) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// ANIMAÇÕES DE ENTRADA
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.galeria-item, .equipamento-card, .info-card').forEach(el => {
    observer.observe(el);
});

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM completamente carregado');
    
    // Atualizar ano no footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (elementExists(yearElement)) {
        yearElement.textContent = currentYear;
    }
    
    // Animações iniciais
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (elementExists(heroText)) heroText.classList.add('animate');
    if (elementExists(heroImage)) heroImage.classList.add('animate');
    
    // Indicador visual de JS funcionando
    const jsStatus = document.createElement('div');
    jsStatus.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: #2ecc71;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 9999;
        opacity: 0.9;
        font-family: Arial, sans-serif;
    `;
    jsStatus.textContent = 'Natureza 🌿';
    document.body.appendChild(jsStatus);
    
    setTimeout(() => {
        jsStatus.style.opacity = '0';
        setTimeout(() => {
            if (jsStatus.parentNode) {
                jsStatus.parentNode.removeChild(jsStatus);
            }
        }, 500);
    }, 3000);
    
    // Garantir que todos os links são clicáveis
    setTimeout(() => {
        const allLinks = document.querySelectorAll('a, button');
        allLinks.forEach(el => {
            el.style.cursor = 'pointer';
        });
    }, 100);
    
    console.log('🌿 Portfólio Natureza inicializado com sucesso!');
});

// ============================================
// EFEITO DE HOVER NAS FOTOS DA GALERIA
// ============================================

galeriaItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ============================================
// LOG INICIAL
// ============================================

console.log('='.repeat(50));
console.log('🌲 PORTFÓLIO FOTÓGRAFO NATUREZA');
console.log('='.repeat(50));
console.log('Menu Mobile:', elementExists(hamburger) ? '✅ Encontrado' : '❌ Não encontrado');
console.log('Galeria Itens:', galeriaItems.length + ' itens');
console.log('Formulário Contato:', elementExists(contactForm) ? '✅ Encontrado' : '❌ Não encontrado');
console.log('='.repeat(50));