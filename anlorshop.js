// Smooth scroll for the offer banner link
document.querySelector('.offer-head a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#precios').scrollIntoView({
        behavior: 'smooth'
    });
});

// Animate the appearance of the animated box on scroll
window.addEventListener('scroll', function() {
    const animatedBox = document.querySelector('.animated-box');
    const boxPosition = animatedBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (boxPosition < screenPosition) {
        animatedBox.style.transform = 'translateY(0)';
        animatedBox.style.opacity = '1';
    }
});

// Trigger animations for text elements inside the animated container
document.addEventListener("scroll", function() {
    const container = document.querySelector('.animated-container');
    const textElements = document.querySelectorAll('.animated-text');
    const containerPosition = container.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (containerPosition < screenHeight - 100) {
        textElements.forEach((element) => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        });
    }
});

function toggleFaq(faqId) {
    const faq = document.getElementById(faqId);
    const parent = faq.parentElement;

    if (faq.style.display === "none" || faq.style.display === "") {
        faq.style.display = "block";
        parent.classList.add('active');
    } else {
        faq.style.display = "none";
        parent.classList.remove('active');
    }
}


// Initialize AOS (Animate on Scroll) library
AOS.init();
function toggleFaq(faqId) {
    const faq = document.getElementById(faqId);
    const parent = faq.parentElement;

    if (faq.style.display === "none" || faq.style.display === "") {
        faq.style.display = "block";
        parent.classList.add('active'); // Clase activa
    } else {
        faq.style.display = "none";
        parent.classList.remove('active'); // Eliminar clase activa
    }
}
window.addEventListener("scroll", function () {
    const animatedBox = document.querySelector(".animated-box");
    const boxPosition = animatedBox.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (boxPosition < screenHeight - 100) {
        animatedBox.style.opacity = "1"; // Cambiar opacidad
        animatedBox.style.transform = "translateY(0)"; // Regresar a posición original
    } else {
        animatedBox.style.opacity = "0"; // Ocultar al hacer scroll hacia arriba
        animatedBox.style.transform = "translateY(20px)"; // Mover hacia abajo
    }
});

