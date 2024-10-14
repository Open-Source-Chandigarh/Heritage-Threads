// NAVBAR ADVERTISEMENT
const navbar  = document.querySelector(".navbarText");
gsap.fromTo(navbar,
    {
    duration: 25,
    x: "220%",
    ease: "linear",
    repeat: -1,
    yoyo:true
},{
    duration: 25,
    x: "-200%",
    ease: "linear",
    repeat: -1,
}
)

const targetText = document.querySelector(".targetText h2");
const targetTextContainer = document.querySelector(".targetText");
gsap.to(targetText, {
    duration: 20,
    xPercent: -100,
    ease: "linear",
    repeat: -1,
    repeatDelay: 1,
    modifiers: {
        xPercent: gsap.utils.unitize(x => parseFloat(x) % 100)
    }
});

gsap.set(targetText, { xPercent: 0 });
gsap.set(targetText, { width: "auto" });
gsap.set(targetTextContainer, { width: "100%", overflow: "hidden" });

// SOCIAL ICONS
const socialIcons = document.querySelectorAll(".social-icon");
function socialIconAnimation() {
    gsap.to(this, {
        scale: 1.2,
        duration: 0.2,
        ease: "linear",
        repeat: -1,
        yoyo: true,
    });
}
function stopSocialIconAnimation() {
    gsap.killTweensOf(this); 
    gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "linear",
    });
}
socialIcons.forEach(icon => {
    icon.addEventListener("mouseover", socialIconAnimation);
    icon.addEventListener("mouseleave", stopSocialIconAnimation);
});


const subNavbar = document.querySelector(".subNavbar");
gsap.from(subNavbar, {
    duration: 0.5,
    opacity: 0,
    y: "-50%",
    ease: "linear",
    scrollTrigger: {
        trigger: subNavbar,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

const cards = document.querySelector(".cards");
gsap.from(cards, {
    duration: 1.2,
    opacity: 0,
    y: "50%",
    ease: "power2.out",
    scrollTrigger: {
        trigger: cards,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});
    
document.addEventListener("DOMContentLoaded", function() {
    let currentScroll = 0;
    let isScrollingDown = true;
    const arrows = document.querySelectorAll(".arrow");
    const tween = gsap.to(".marquee_inner", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
    });

    gsap.set(".marquee_inner", { xPercent: 0 });
    window.addEventListener("scroll", () => {
        const newScroll = window.pageYOffset;
        isScrollingDown = newScroll > currentScroll;
        currentScroll = newScroll;
        gsap.to(tween, {
            timeScale: isScrollingDown ? 1 : -1,
        });
        arrows.forEach(arrow => {
            if (isScrollingDown) {
                arrow.classList.remove("active");
            } else {
                arrow.classList.add("active");
            }
        });
    });
    const inputContainers = document.querySelectorAll('.input-container');
    inputContainers.forEach(container => {
        const input = container.querySelector('input');
        input.addEventListener('focus', () => {
            container.style.transform = 'scale(1.01)';
            container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
        input.addEventListener('blur', () => {
            container.style.transform = 'scale(1)';
            container.style.boxShadow = 'none';
    });
});

}) 



const form = document.querySelector('div.left');
const emailInput = document.querySelector('input[placeholder="Email"]');
const passwordInput = document.querySelector('input[placeholder="Set Password"]');
const confirmPasswordInput = document.querySelector('input[placeholder="Confirm Password"]');
const signInButton = document.querySelector('button.hoverButton1');
const createAccountButton = document.querySelector('button.hoverButton2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  // Email validation
  if (emailValue === '') {
    displayError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    displayError(emailInput, 'Invalid email address');
  } else {
    removeError(emailInput);
  }

  // Password validation
  if (passwordValue === '') {
    displayError(passwordInput, 'Password is required');
  } else if (passwordValue.length < 8) {
    displayError(passwordInput, 'Password must be at least 8 characters');
  } else {
    removeError(passwordInput);
  }

  // Confirm password validation
  if (confirmPasswordValue === '') {
    displayError(confirmPasswordInput, 'Confirm password is required');
  } else if (confirmPasswordValue !== passwordValue) {
    displayError(confirmPasswordInput, 'Passwords do not match');
  } else {
    removeError(confirmPasswordInput);
  }

  // Check if all fields are valid
  if (emailValue && passwordValue && confirmPasswordValue && isValidEmail(emailValue) && passwordValue.length >= 8 && confirmPasswordValue === passwordValue) {
    // Form is valid, proceed with submission
    console.log('Form is valid!');
    // You can add your form submission logic here
  }
}

function displayError(input, message) {
  const errorElement = input.nextElementSibling;
  if (!errorElement) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-sm';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
  } else {
    errorElement.textContent = message;
  }
}

function removeError(input) {
  const errorElement = input.nextElementSibling;
  if (errorElement) {
    errorElement.remove();
  }
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
