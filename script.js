// بيانات المقالات - تأكد من مطابقة أسماء الملفات في الروابط
const articles = [
    {
        title: "Audifort: The Science of Healthy Hearing",
        description: "Explore how natural ingredients support your auditory system and enhance neural clarity in 2026.",
        image: "https://drive.google.com/thumbnail?id=17RoGQoc9n9Xkehndpa0yA-YGapTNsXFk",
        link: "audifort-review.html",
        category: "WELLNESS"
    },
    {
        title: "The Hero Instinct: Decoding Connection",
        description: "An expert analysis into the psychological triggers that drive deep emotional commitment in men.",
        image: "https://s3.amazonaws.com/bei/hso/Products/HSO_Book_Phone.png",
        link: "secret-obsession.html",
        category: "PSYCHOLOGY"
    }
];

// دالة العرض الأساسية
function displayArticles() {
    const container = document.getElementById('articles-container');
    
    // إذا لم يجد الحاوية، سيحاول مرة أخرى بعد قليل
    if (!container) {
        setTimeout(displayArticles, 100);
        return;
    }

    container.innerHTML = articles.map(post => `
        <div class="article-card">
            <img src="${post.image}" alt="${post.title}" class="article-img">
            <div class="article-body">
                <span style="color: #00d4ff; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px;">${post.category}</span>
                <h3 style="color: #ffffff; margin: 10px 0; font-size: 1.3rem;">${post.title}</h3>
                <p style="color: #adb5bd; font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">${post.description}</p>
                <a href="${post.link}" style="color: #00d4ff; text-decoration: none; font-weight: bold; display: flex; align-items: center; gap: 5px;">
                    Read Analysis →
                </a>
            </div>
        </div>
    `).join('');
}

// نظام القائمة المنسدلة للجوال
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('dropdown-nav');
    if (hamburger && nav) {
        hamburger.onclick = () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        };
    }
}

// تشغيل كل شيء بمجرد تحميل الصفحة
window.onload = () => {
    displayArticles();
    setupMobileMenu();
};
