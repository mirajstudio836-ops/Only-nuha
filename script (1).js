document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const firstScreen = document.getElementById('firstScreen');
    const secondScreen = document.getElementById('secondScreen');
    const finalScreen = document.getElementById('finalScreen');

    // No button - moves around playfully
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        noBtn.style.transform = `translate(${30 + x * 50}px, ${30 + y * 50}px)`;
        noBtn.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            noBtn.style.transform = 'translateX(0)';
        }, 100);
    });

    // Yes button - main flow
    yesBtn.addEventListener('click', function() {
        // Hide first screen
        firstScreen.classList.remove('active');
        
        // Show second screen after delay
        setTimeout(() => {
            secondScreen.classList.add('active');
            
            // Create love particles
            createLoveParticles();
        }, 500);

        // Auto transition to final screen after 5 seconds (5000ms)
        setTimeout(() => {
            secondScreen.classList.remove('active');
            setTimeout(() => {
                finalScreen.classList.add('active');
                createFinalAnimation();
            }, 500);
        }, 5000); // Changed from 4000 to 5000ms = 5 seconds
    });

    function createLoveParticles() {
        for(let i = 0; i < 20; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 100);
        }
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'floatUp 3s linear forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    function createFinalAnimation() {
        // More hearts for final screen
        for(let i = 0; i < 30; i++) {
            setTimeout(() => {
                createBigHeart();
            }, i * 80);
        }
    }

    function createBigHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = '30px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'floatUpBig 4s linear forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
});

// Add CSS animations for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes floatUpBig {
        to {
            transform: translateY(-120vh) rotate(720deg) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);