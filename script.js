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
    hideCookieNotice
