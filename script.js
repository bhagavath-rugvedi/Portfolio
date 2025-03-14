document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    window.addEventListener('load', () => {
      const loading = document.getElementById('loading');
      if (loading) {
        loading.style.display = 'none';
      }
    });
  
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('change', function() {
        const toggleClasses = (selector, className) => {
          document.querySelectorAll(selector).forEach(el => el.classList.toggle(className));
        };
  
        document.body.classList.toggle('dark-mode');
        toggleClasses('.section, .project-card, .navbar, .hero-section', 'dark-mode');
      });
    } else {
      console.error("darkModeToggle element not found.");
    }
  
    // Skill Bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(skillBar => {
      const skillLevel = skillBar.querySelector('.skill-level');
      const skillName = skillBar.querySelector('.skill-name').textContent;
      const skills = {
        'HTML5': 95,
        'CSS3': 80,
        'JavaScript': 65,
        'React': 80,
        'Node .js': 55,
        'Figma': 60,
        'MongoDB': 65,
        'Git/GitHub': 70,
        'Bootstrap': 85,
        'AWS': 85
      };
      const percentage = skills[skillName] || 50; // Default to 50%
  
      skillLevel.style.width = percentage + '%';
      skillBar.classList.add('skill-' + skillName.toLowerCase().replace('/', '-'));
    });
  
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        if (name && email && message) {
          alert('Thank you for your message!');
          this.reset();
        } else {
          alert('Please fill in all fields.');
        }
      });
    } else {
      console.error("contactForm element not found.");
    }
  
    // Background Scroll Effect
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      document.body.style.transition = 'background 0.5s ease';
      document.body.style.background = scrollPosition > 200 ? 'linear-gradient(135deg, #d1e7dd, #e0f2f7)' : 'linear-gradient(135deg, #e0f2f7, #cce0e5)';
    });
  
    // Skills Section Visibility
    window.addEventListener('scroll', function() {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        skillsSection.classList.toggle('skills-visible', skillsPosition < screenPosition);
      } else {
        console.error("skillsSection element not found.");
      }
    });
  
    // Typed.js
    new Typed("#jobProfile", {
      strings: ["Web Developer.", "Web Designer.", "Problem Solver."],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
      cursorChar: '|',
      shuffle: true,
      smartBackspace: true,
    });
  
    // Navigation Link Activation on Scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  
    // Intersection Observer for Section Visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section').forEach(section => observer.observe(section));
  
    // Custom Cursor
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    if (cursorDot && cursorOutline) {
      window.addEventListener('mousemove', function(e) {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        setTimeout(() => {
          cursorOutline.style.left = e.clientX + 'px';
          cursorOutline.style.top = e.clientY + 'px';
        }, 50);
      });
      document.querySelectorAll('a, button, .nav-link, .project-card').forEach(item => {
        item.addEventListener('mouseenter', () => cursorOutline.classList.add('link-grow'));
        item.addEventListener('mouseleave', () => cursorOutline.classList.remove('link-grow'));
      });
      document.addEventListener('mouseout', function(e) {
        if (e.relatedTarget === null) {
          cursorDot.style.opacity = '0';
          cursorOutline.style.opacity = '0';
        }
      });
      document.addEventListener('mouseover', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
      });
    }
  
    // Scroll Progress Bar
    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const scrollProgressBar = document.getElementById('scrollProgressBar');
      if (scrollProgressBar) {
        scrollProgressBar.style.width = scrolled + '%';
      }
    });
  
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  });