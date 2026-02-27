// تأثير التمرير للأسفل لتغيير شكل الرأس والشعار
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// تفعيل القائمة المنسدلة عند الضغط على الشرطات
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    // يمكنك إضافة كود CSS لتنسيق `.nav-menu.active` كقائمة منسدلة عمودية
});
