window.addEventListener("load",()=>{
  setTimeout(()=>{
      document.querySelector("#loader").style.display= `none`;
      
  },1000)
})
const gridImages = document.querySelectorAll('.gridImage');
gridImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    gsap.to(image, {
      scale: 1.1,
      duration: 0.8,
      ease: 'power1.inOut',
    });
  });
  image.addEventListener('mouseleave', () => {
    gsap.to(image, {
      scale: 1,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  });
});


const cards = [
  { card: document.querySelector('#card1'), circle: document.querySelector('#circle1') , check: document.querySelector('#check1') },
  { card: document.querySelector('#card2'), circle: document.querySelector('#circle2') , check: document.querySelector('#check2') },
  { card: document.querySelector('#card3'), circle: document.querySelector('#circle3') , check: document.querySelector('#check3') }
];

let activeCard = null;

function setActiveCard(index) {
  if (activeCard !== null) {
      cards[activeCard].card.style.border = '2px solid #212327';
      cards[activeCard].circle.style.backgroundColor = 'black';
      cards[activeCard].circle.style.display = '';
      cards[activeCard].check.style.display = '';
  }

  if (activeCard === index) {
      activeCard = null;
  } else {
      cards[index].card.style.border = '2px solid #E0218A';
      cards[index].circle.style.backgroundColor = 'black';
      cards[index].circle.style.display = 'block';
      cards[index].check.style.display = 'block';
      activeCard = index;
  }
}

cards.forEach((item, index) => {
  item.card.addEventListener('click', () => setActiveCard(index));
});

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

card1.addEventListener('mouseover', () => {
  gsap.to(card1, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card1.addEventListener('mouseleave', () => {
  gsap.to(card1, {
    scale: 1,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card2.addEventListener('mouseover', () => {
  gsap.to(card2, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card2.addEventListener('mouseleave', () => {
  gsap.to(card2, {
    scale: 1,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card3.addEventListener('mouseover', () => {
  gsap.to(card3, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

card3.addEventListener('mouseleave', () => {
  gsap.to(card3, {
    scale: 1,
    duration: 0.3,
    ease: 'power1.inOut',
  });
});

gsap.utils.toArray('.collectionSection .grid-item').forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    scale: 1,
    duration: 0.7,
    ease: 'power1.inOut',
    delay: 0, 
  });
});


const imageSection = document.querySelector('.imageSection');
const imageSectionGridItems = imageSection.querySelectorAll('.grid-item');
gsap.utils.toArray(imageSectionGridItems).forEach((item, index) => {
  gsap.fromTo(item, 
    { y: index % 2 === 0 ? 100 : -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top bottom-=100',
        end: 'top center',
        scrub: true
      }
    }
  );
});
gsap.to(imageSection, {
  backgroundPosition: '50% 100%',
  ease: 'none',
  scrollTrigger: {
    trigger: imageSection,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});
const imageSectionSwiperHeading = imageSection.querySelector('.swiperHeading');
gsap.from(imageSectionSwiperHeading, {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: imageSection,
    start: 'top bottom-=100',
    end: 'top center',
    scrub: true
  }
});

const cardsScroll = [card1, card2, card3];
cardsScroll.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.6,
    ease: 'back.out(1.7)',
  });
});

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




document.addEventListener('DOMContentLoaded', () => {
  gsap.to("#mainHeading", {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      y: 0,
      stagger: 0.2,
      onComplete: () => {
          gsap.to("#mainHeading span", {
              duration: 1.5,
              scale: 1.05,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              stagger: {
                  amount: 0.5
              }
          });
      }
  });
});



const sectionHeader = document.querySelectorAll('.section-header');
sectionHeader.forEach(element => {
    const header = element.querySelector('.section-header h2');
    const cta = element.querySelector('.section-header p');
    const headerImage = element.querySelector('.image-container img');
    console.log(header, headerImage);

    const tl = gsap.timeline()
        .from(headerImage, { y: -200 })
        .from(header, { y: -200, opacity: 0, scaleY: 4, duration: 0.3, transformOrigin: '50% 100% -100' }, '-=0.25')
        .from(cta, { y: -200, opacity: 0, duration: 0.3, transformOrigin: '50% 100% -100' }, '-=0.3')


    ScrollTrigger.create({
        trigger: element,
        start: 'top 100%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse',
        animation: tl,
        // markers: true,
        scrub: 1
    })

});
const circle = document.querySelector('.circle');
const centerX = window.innerWidth / 2;
const centerY = window.innerWidth / 2;
const title = document.querySelector('.page-header .title');
console.log(title);

gsap.set(circle, { xPercent: -100, yPercent: -100 });
Math.getDistance = function (x1, y1, x2, y2) {
    let xs = x2 - x1;
    let ys = y2 - y1;
    xs *= xs;
    ys *= ys;
    return Math.sqrt(xs + ys);
}
const radius = Math.getDistance(0, 0, centerX, centerY);
const fullWidth = radius * 2;
const percentIncrease = fullWidth / 100

gsap.from("#animatedTitle", {
  duration: 2,
  opacity: 0,
  y: -50,
  ease: "power2.out"
});
