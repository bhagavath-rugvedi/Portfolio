document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => section.classList.toggle('dark-mode'));
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => card.classList.toggle('dark-mode'));
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.toggle('dark-mode');
            }
            //for hero changes in dark mode
            const hero = document.querySelector('.hero-section');
            if(hero){
                hero.classList.toggle('dark-mode');
            }
        });
    } else {
        console.error("darkModeToggle element not found.");
    }

    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic form validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            //for actual backend submission)
            //console.log('Form submitted:', { name, email, message });
            alert('Message sent successfully!');
            contactForm.reset(); // Clear the form
        });
    } else {
        console.error("contactForm element not found.");
    }

    // Add any additional JavaScript functionality here (e.g., animations, interactivity)
    // Example: change background on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if(scrollPosition > 200) {
            document.body.style.transition = 'background 0.5s ease';
            document.body.style.background = 'linear-gradient(135deg, #d1e7dd, #e0f2f7)';
        } else {
            document.body.style.transition = 'background 0.5s ease';
            document.body.style.background = 'linear-gradient(135deg, #e0f2f7, #cce0e5)';
        }
    });

    //Example: add a class on scroll to a section.
    window.addEventListener('scroll', function() {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const skillsPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (skillsPosition < screenPosition) {
                skillsSection.classList.add('skills-visible'); // Add a class when skills section is visible
            }
        } else {
            console.error("skillsSection element not found.");
        }
    });
    // Typed.js for the typing effect
    var typed = new Typed("#jobProfile", {
        strings: ["Web Developer.","Web Designer.","Problem Solver." ],
        typeSpeed: 70,
        backSpeed: 30,
        loop: true,
    });
});