// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Create backdrop element
const backdrop = document.createElement('div');
backdrop.className = 'nav-backdrop';
document.body.appendChild(backdrop);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    backdrop.classList.toggle('active');
    
    // Prevent body scroll when sidebar is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
}));

// Close mobile menu when clicking on backdrop
backdrop.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Enhanced Email Functionality
function openEmailClient() {
    const email = 'karthimk8098@gmail.com';
    const subject = 'Portfolio Inquiry - Project Discussion';
    const body = `Hi Karthi,

I would like to discuss a project with you.

*Project Details:*
• Project Type:
• Budget Range:
• Timeline:
• Additional Requirements:

*My Contact Information:*
• Name:
• Email:
• Phone:

Please let me know when you are available for a discussion.

Best regards,`;

    // Try to detect the user's preferred email client
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('gmail') || userAgent.includes('google')) {
        // Gmail web interface
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    } else if (userAgent.includes('outlook') || userAgent.includes('microsoft')) {
        // Outlook web interface
        const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(outlookUrl, '_blank');
    } else {
        // Default mailto (opens default email client)
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    }
}

// Add click event to email button
document.addEventListener('DOMContentLoaded', function() {
    const emailButton = document.querySelector('a[href^="mailto:"]');
    if (emailButton) {
        emailButton.addEventListener('click', function(e) {
            e.preventDefault();
            openEmailClient();
        });
    }
});

// Individual email client functions
function openGmail() {
    const email = 'karthimk8098@gmail.com';
    const subject = 'Portfolio Inquiry - Project Discussion';
    const body = `Hi Karthi,

I would like to discuss a project with you.

*Project Details:*
• Project Type:
• Budget Range:
• Timeline:
• Additional Requirements:

*My Contact Information:*
• Name:
• Email:
• Phone:

Please let me know when you are available for a discussion.

Best regards,`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
}

function openOutlook() {
    const email = 'karthimk8098@gmail.com';
    const subject = 'Portfolio Inquiry - Project Discussion';
    const body = `Hi Karthi,

I would like to discuss a project with you.

*Project Details:*
• Project Type:
• Budget Range:
• Timeline:
• Additional Requirements:

*My Contact Information:*
• Name:
• Email:
• Phone:

Please let me know when you are available for a discussion.

Best regards,`;

    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(outlookUrl, '_blank');
}

function openDefaultEmail() {
    const email = 'karthimk8098@gmail.com';
    const subject = 'Portfolio Inquiry - Project Discussion';
    const body = `Hi Karthi,

I would like to discuss a project with you.

*Project Details:*
• Project Type:
• Budget Range:
• Timeline:
• Additional Requirements:

*My Contact Information:*
• Name:
• Email:
• Phone:

Please let me know when you are available for a discussion.

Best regards,`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}

// Toggle custom budget input
function toggleBudgetInput() {
    const budgetSelect = document.getElementById('budget-select');
    const budgetCustom = document.getElementById('budget-custom');
    
    if (budgetSelect.value === 'custom') {
        budgetCustom.style.display = 'block';
        budgetCustom.required = true;
        budgetCustom.focus();
    } else {
        budgetCustom.style.display = 'none';
        budgetCustom.required = false;
        budgetCustom.value = '';
    }
}

// Toggle custom timeline input
function toggleTimelineInput() {
    const timelineSelect = document.getElementById('timeline-select');
    const timelineCustom = document.getElementById('timeline-custom');
    
    if (timelineSelect.value === 'custom') {
        timelineCustom.style.display = 'block';
        timelineCustom.required = true;
        timelineCustom.focus();
    } else {
        timelineCustom.style.display = 'none';
        timelineCustom.required = false;
        timelineCustom.value = '';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.link-card, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation for contact form (if exists)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

// Add form validation event listeners
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            if (!validateForm(contactForm)) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
});

// Smooth reveal animation for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize tooltips for skills (if exists)
function initTooltips() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const tooltip = item.getAttribute('data-tooltip');
        if (tooltip) {
            item.addEventListener('mouseenter', () => {
                showTooltip(item, tooltip);
            });
            
            item.addEventListener('mouseleave', () => {
                hideTooltip();
            });
        }
    });
}

function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.position = 'absolute';
    tooltip.style.top = rect.top - 40 + 'px';
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.opacity = '1';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Initialize tooltips when page loads
document.addEventListener('DOMContentLoaded', initTooltips);

// Email functionality
function sendEmail() {
    const email = 'karthimk8098@gmail.com';
    const subject = 'Portfolio Inquiry';
    const body = `Hi Karthi,

I would like to discuss a project with you.

Please let me know when you are available.

Best regards,`;

    // Try to use mailto first
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Check if mailto is supported
    if (navigator.userAgent.includes('Windows') || navigator.userAgent.includes('Mac')) {
        window.location.href = mailtoLink;
    } else {
        // Fallback to Gmail for mobile/other devices
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, '_blank');
    }
}

// WhatsApp Form Submission
function sendFormToWhatsApp() {
    // Get all form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Get budget value (either from select or custom input)
    const budgetSelect = document.getElementById('budget-select').value;
    const budgetCustom = document.getElementById('budget-custom').value.trim();
    const budget = budgetSelect === 'custom' ? budgetCustom : budgetSelect;
    
    // Get timeline value (either from select or custom input)
    const timelineSelect = document.getElementById('timeline-select').value;
    const timelineCustom = document.getElementById('timeline-custom').value.trim();
    const timeline = timelineSelect === 'custom' ? timelineCustom : timelineSelect;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields (Name, Email, Subject, and Message)');
        return;
    }
    
    // Validate custom inputs if selected
    if (budgetSelect === 'custom' && !budgetCustom) {
        alert('Please enter your custom budget amount');
        return;
    }
    if (timelineSelect === 'custom' && !timelineCustom) {
        alert('Please enter your custom timeline');
        return;
    }
    
    // Format the message for WhatsApp
    let whatsappMessage = `*New Portfolio Inquiry from ${name}*%0A%0A`;
    whatsappMessage += `*Contact Details:*%0A`;
    whatsappMessage += `• Name: ${name}%0A`;
    whatsappMessage += `• Email: ${email}%0A`;
    whatsappMessage += `• Subject: ${subject}%0A%0A`;
    whatsappMessage += `*Message:*%0A${message}%0A%0A`;
    
    // Add optional fields if provided
    if (budget) {
        const budgetLabel = budgetSelect === 'custom' ? 'Custom Budget' : 'Budget Range';
        whatsappMessage += `*${budgetLabel}:* ${budget}%0A`;
    }
    if (timeline) {
        const timelineLabel = timelineSelect === 'custom' ? 'Custom Timeline' : 'Project Timeline';
        whatsappMessage += `*${timelineLabel}:* ${timeline}%0A`;
    }
    
    whatsappMessage += `%0A---%0A`;
    whatsappMessage += `This message was sent from your portfolio website.`;
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/916383389390?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

// Project filtering functionality
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// FAQ functionality
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle answer visibility
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Initialize project filters and FAQ when page loads
document.addEventListener('DOMContentLoaded', () => {
    initProjectFilters();
    initFAQ();
});

// Add CSS animation for project cards
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
