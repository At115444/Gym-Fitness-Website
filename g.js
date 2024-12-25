// Smooth Scroll for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic Greeting in Hero Section
const heroGreeting = document.querySelector('.hero-content h1');
const hours = new Date().getHours();
if (heroGreeting) {
    if (hours < 12) {
        heroGreeting.textContent = 'Good Morning! Welcome to Fitness Gym';
    } else if (hours < 18) {
        heroGreeting.textContent = 'Good Afternoon! Welcome to Fitness Gym';
    } else {
        heroGreeting.textContent = 'Good Evening! Welcome to Fitness Gym';
    }
}

// Toggle Service Details
document.querySelectorAll('.services .card').forEach(card => {
    card.addEventListener('click', () => {
        const details = card.querySelector('p');
        if (details) {
            details.classList.toggle('hidden');
        }
    });
});

// CSS for Hidden Class (Add this to the CSS file)
// Add this CSS rule to the `c.css` file
/*
.hidden {
    display: none;
}
*/
