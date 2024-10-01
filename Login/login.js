// NAVBAR ADVERTISEMENT
const navbar  = document.querySelector(".navbarText");
gsap.fromTo(navbar,
    {
    duration: 14,
    x: "220%",
    ease: "linear",
    repeat: -1,
    yoyo:true
},{
    duration: 14,
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
