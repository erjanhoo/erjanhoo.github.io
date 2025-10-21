document.addEventListener('DOMContentLoaded', function() {

    const themeButton = document.getElementById('theme-switch-button');
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('primary-navigation');

    function toggleTheme() {
        const body = document.body;

        if (body.classList.contains('light-theme')) {

            body.classList.remove('light-theme');
            themeButton.textContent = 'Light';
            localStorage.setItem('theme', 'dark');

        } else {

            body.classList.add('light-theme');
            themeButton.textContent = 'Dark';
            localStorage.setItem('theme', 'light');
        }
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeButton.textContent = 'Dark';
        } else {
            document.body.classList.remove('light-theme');
            themeButton.textContent = 'Light';
        }
    }


    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navbarHeight = 60;
            const elementPosition = targetElement.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }


    function setupNavigation() {
        const navLinks = document.querySelectorAll('.navbar-list a');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const linkText = this.textContent.toLowerCase();

                switch(linkText) {
                    case 'home':
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        break;
                    case 'about':
                        smoothScrollTo('about');
                        break;
                    case 'work':
                        smoothScrollTo('work');
                        break;
                    default:
                        console.log('Раздел не найден:', linkText);
                }

                // Close nav on small screens after navigation
                if (navList && navList.classList.contains('open')) {
                    navList.classList.remove('open');
                    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }


    function setupContactLink() {
        const contactLink = document.querySelector('.contact-link');
        if (contactLink) {
            contactLink.addEventListener('click', function(e) {
                e.preventDefault();
                smoothScrollTo('contact-me');
            });
        }
    }

    themeButton.addEventListener('click', toggleTheme);

    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            const isOpen = navList.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Ensure menu visibility resets on resize across breakpoints
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navList.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    loadTheme();
    setupNavigation();
    setupContactLink();
});

document.addEventListener('DOMContentLoaded', function() {

    const sendButton = document.querySelector('.send-button');

    sendButton.addEventListener('click', function() {


        const name = document.querySelector('.text-input').value;
        const email = document.querySelector('.email-input').value;
        const message = document.querySelector('.message-input').value;


        if (name === '' || email === '' || message === '') {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        if (!email.includes('@')) {
            alert('Введите правильный email!');
            return;
        }

        alert(`Здравствуйте ${name}! Ваше сообщение отправлено!`);


        document.querySelector('.text-input').value = '';
        document.querySelector('.email-input').value = '';
        document.querySelector('.message-input').value = '';
    });

});