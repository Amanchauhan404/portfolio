class InteractiveResume {
    constructor() {
        this.currentSection = 0;
        this.totalSections = 5;
        this.isAnimating = false;
        this.gameWorld = document.getElementById('game-world');
        this.character = document.getElementById('character');
        this.navigation = document.getElementById('navigation');
        this.progressBar = document.querySelector('.progress-fill');
        this.loadingScreen = document.getElementById('loading-screen');
        
        this.init();
    }

    init() {
        this.showLoadingScreen();
        this.setupEventListeners();
        this.setupNavigation();
        this.updateProgress();
        
        // Hide loading screen after 2 seconds
        setTimeout(() => {
            this.hideLoadingScreen();
        }, 2000);
    }

    showLoadingScreen() {
        this.loadingScreen.classList.add('active');
    }

    hideLoadingScreen() {
        this.loadingScreen.classList.remove('active');
        this.animateCharacterEntry();
    }

    animateCharacterEntry() {
        this.character.style.transform = 'translateX(-100px) scale(0.5)';
        this.character.style.opacity = '0';
        
        setTimeout(() => {
            this.character.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            this.character.style.transform = 'translateX(0) scale(1)';
            this.character.style.opacity = '1';
        }, 100);
    }

    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isAnimating) return;
            
            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    this.nextSection();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    this.prevSection();
                    break;
            }
        });

        // Mouse wheel navigation
        document.addEventListener('wheel', (e) => {
            if (this.isAnimating) return;
            
            if (e.deltaY > 0) {
                this.nextSection();
            } else {
                this.prevSection();
            }
        });

        // Touch navigation for mobile
        let touchStartX = 0;
        let touchStartY = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            if (this.isAnimating) return;
            
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            // Determine if it's a horizontal or vertical swipe
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 50) {
                    this.prevSection();
                } else if (deltaX < -50) {
                    this.nextSection();
                }
            } else {
                if (deltaY < -50) {
                    this.nextSection();
                } else if (deltaY > 50) {
                    this.prevSection();
                }
            }
        });

        // Contact form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmission();
            });
        }

        // Skill bar animations when skills section is visible
        this.setupSkillBarAnimations();
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (this.isAnimating) return;
                this.goToSection(index);
            });
        });
    }

    setupSkillBarAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.fill');
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.animation = 'none';
                            bar.offsetHeight; // Trigger reflow
                            bar.style.animation = 'fillBar 2s ease-out';
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.getElementById('skills-section');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    nextSection() {
        if (this.currentSection < this.totalSections - 1) {
            this.currentSection++;
            this.updateView();
        }
    }

    prevSection() {
        if (this.currentSection > 0) {
            this.currentSection--;
            this.updateView();
        }
    }

    goToSection(sectionIndex) {
        if (sectionIndex >= 0 && sectionIndex < this.totalSections) {
            this.currentSection = sectionIndex;
            this.updateView();
        }
    }

    updateView() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        
        // Update game world position
        const translateX = -this.currentSection * 100;
        this.gameWorld.style.transform = `translateX(${translateX}vw)`;
        
        // Update navigation
        this.updateNavigation();
        
        // Update progress bar
        this.updateProgress();
        
        // Animate character
        this.animateCharacter();
        
        // Update background based on section
        this.updateBackground();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 1000);
    }

    updateNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentSection);
        });
    }

    updateProgress() {
        const progress = ((this.currentSection + 1) / this.totalSections) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    animateCharacter() {
        // Character bounce animation when moving
        this.character.style.transform = 'translateY(-20px) scale(1.1)';
        
        setTimeout(() => {
            this.character.style.transform = 'translateY(0) scale(1)';
        }, 300);

        // Add walking animation class
        this.character.classList.add('walking');
        setTimeout(() => {
            this.character.classList.remove('walking');
        }, 1000);
    }

    updateBackground() {
        const body = document.body;
        
        // Change background gradient based on current section
        switch(this.currentSection) {
            case 0: // Intro
                body.style.background = 'linear-gradient(to bottom, #87CEEB 0%, #98FB98 100%)';
                break;
            case 1: // About
                body.style.background = 'linear-gradient(to bottom, #FFE4B5 0%, #DEB887 100%)';
                break;
            case 2: // Skills (underwater)
                body.style.background = 'linear-gradient(to bottom, #4682B4 0%, #191970 100%)';
                break;
            case 3: // Experience
                body.style.background = 'linear-gradient(to bottom, #708090 0%, #2F4F4F 100%)';
                break;
            case 4: // Contact (sky)
                body.style.background = 'linear-gradient(to bottom, #FFB6C1 0%, #FFC0CB 100%)';
                break;
        }
    }

    handleContactSubmission() {
        const button = document.querySelector('.send-button');
        const originalText = button.textContent;
        
        // Animate button
        button.textContent = 'SENDING...';
        button.style.background = 'linear-gradient(45deg, #FF9800 0%, #F57C00 100%)';
        button.disabled = true;
        
        // Simulate sending (replace with actual form submission)
        setTimeout(() => {
            button.textContent = 'SENT!';
            button.style.background = 'linear-gradient(45deg, #4CAF50 0%, #45a049 100%)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                this.clearForm();
            }, 2000);
        }, 1500);
    }

    clearForm() {
        const form = document.querySelector('.contact-form');
        if (form) {
            form.reset();
        }
    }

    // Add particle effects for special sections
    createParticles(section) {
        if (section === 2) { // Skills section - underwater bubbles
            this.createBubbles();
        } else if (section === 4) { // Contact section - floating hearts
            this.createHearts();
        }
    }

    createBubbles() {
        const skillsSection = document.getElementById('skills-section');
        
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.cssText = `
                position: absolute;
                width: ${Math.random() * 20 + 10}px;
                height: ${Math.random() * 20 + 10}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                bottom: 0;
                animation: bubbleFloat ${Math.random() * 3 + 2}s linear infinite;
                pointer-events: none;
            `;
            
            skillsSection.appendChild(bubble);
            
            setTimeout(() => {
                bubble.remove();
            }, 5000);
        }
    }

    createHearts() {
        const contactSection = document.getElementById('contact-section');
        
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 20}px;
                left: ${Math.random() * 100}%;
                bottom: 0;
                animation: heartFloat ${Math.random() * 4 + 3}s ease-in-out infinite;
                pointer-events: none;
                opacity: 0.7;
            `;
            
            contactSection.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 7000);
        }
    }
}

// Add CSS animations for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes bubbleFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes heartFloat {
        0% {
            transform: translateY(0) rotate(0deg) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 0.7;
            transform: scale(1);
        }
        90% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg) scale(0);
            opacity: 0;
        }
    }
    
    .character.walking .character-body {
        animation: walk 0.5s ease-in-out infinite alternate;
    }
    
    @keyframes walk {
        0% { transform: rotate(-2deg); }
        100% { transform: rotate(2deg); }
    }
`;
document.head.appendChild(style);

// Initialize the interactive resume when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveResume();
});

// Add some easter eggs
document.addEventListener('keydown', (e) => {
    // Konami code easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    if (!window.konamiProgress) window.konamiProgress = 0;
    
    if (e.key === konamiCode[window.konamiProgress]) {
        window.konamiProgress++;
        if (window.konamiProgress === konamiCode.length) {
            // Easter egg activated!
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 3000);
            window.konamiProgress = 0;
        }
    } else {
        window.konamiProgress = 0;
    }
});