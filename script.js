// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

// Cookie notice functionality
function showCookieNotice() {
    const notice = document.getElementById('cookieNotice');
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    
    if (!cookieAccepted) {
        notice.classList.add('show');
    }
}

function acceptCookies() {
    localStorage.setItem('cookieAccepted', 'true');
    hideCookieNotice();
}

function declineCookies() {
    localStorage.setItem('cookieAccepted', 'false');
    hideCookieNotice();
}

function hideCookieNotice() {
    const notice = document.getElementById('cookieNotice');
    notice.classList.remove('show');
}

// Show cookie notice on page load
window.addEventListener('load', showCookieNotice);

// Smooth scrolling for anchor links
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
