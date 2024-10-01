// DISCOVER MORE
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 26,
    direction: 'horizontal',
    reverseDirection: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });


  // BROWSING HISTORY
  var swiper2 = new Swiper("#browsingHistory .mySwiper", {
    slidesPerView: 10,
    spaceBetween: 26,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 10,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });


// SEARCH RESULTS
let searchResultCards = document.querySelector(".searchResultCards");
  const items = [
    {
      imgSrc: "https://th.bing.com/th/id/OIP.OjHvBOaZDVqKcV_lF4_HKQHaKL?rs=1&pid=ImgDetMain",
      title: "Elegant Silk Saree",
      price: "$79.99"
    },
    {
      imgSrc: "https://www.lashkaraa.com/cdn/shop/articles/modern-indian-outfits.jpg?v=1686682795",
      title: "Designer Anarkali Suit",
      price: "$129.99"
    },
    {
      imgSrc: "https://i.pinimg.com/564x/ac/60/cb/ac60cb3336c1dca74b17fc433f43658c.jpg",
      title: "Embroidered Lehenga Choli",
      price: "$149.99"
    },
    {
      imgSrc: "https://s4sassy.com/ibaweb/pub/media/catalog/product/_/d/_d24069-901457-min-fl-223f_371_1.jpg",
      title: "Traditional Bandhani Saree",
      price: "$89.99"
    },
    {
      imgSrc: "https://d6kigqwjl9u8w.cloudfront.net/wysiwyg/3_59.jpg",
      title: "Cotton Kurta Set",
      price: "$49.99"
    },
    {
      imgSrc: "https://www.lashkaraa.com/cdn/shop/products/laksharaa20-090228059.jpg?v=1665801788&width=533",
      title: "Chiffon Georgette Suit",
      price: "$99.99"
    },
    {
      imgSrc: "https://imgmedia.lbb.in/media/2020/12/5fe08e7405250c1f0d865452_1608552052680.jpg",
      title: "Pashmina Shawl",

      price: "$199.99"
    },
    {
      imgSrc: "https://th.bing.com/th/id/OIP.k5poRn7F_N4GTXV6Xb65oQAAAA?rs=1&pid=ImgDetMain",
      title: "Handloom Cotton Saree",
      price: "$59.99"
    },
    {
      imgSrc: "https://i.etsystatic.com/24311347/r/il/95d8a1/2624108151/il_570xN.2624108151_lwsk.jpg",
      title: "Silk Brocade Sherwani",
      price: "$79.99"
    },
    {
      imgSrc: "https://th.bing.com/th/id/R.5473dd9d2985c714a92f23a9b3fe091a?rik=TtVmuqvpYGJSBQ&riu=http%3a%2f%2fmedia-cdn.list.ly%2fproduction%2f291147%2f1830749%2fitem1830749_600px.jpeg%3fver%3d7255795432&ehk=ErEsaX0z5jBIX6OmdHAPgFxk%2b2wajy9dXFdBJvW8NaM%3d&risl=&pid=ImgRaw&r=0",
      title: "Printed Chiffon Kurta",
      price: "$39.99"
    },
    {
      imgSrc: "https://5.imimg.com/data5/YC/CN/MY-19885899/go-tex-5202a.jpg",
      title: "Block Printed Dupatta",
      price: "$29.99"
    },
    {
      imgSrc: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/a12781a7f2ccb3d663f7fd01e1bd2e4e/j/a/jacquard-navy-blue-and-black-men-sherwani-mstv01289-1.jpg",
      title: "Jacquard Men’s Sherwani",
      price: "$149.99"
    },
  ];

  items.forEach(item => {
    const searchCard = document.createElement("div");
    searchCard.classList.add("searchCard");
    searchCard.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.title}/>
      <div class="cardTitle">${item.title}</div>
      <div class="cardPrice">${item.price}</div>
      <button>Add To Cart</button>
    `;
    searchResultCards.appendChild(searchCard);
    gsap.from(searchCard, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: searchCard,
        start: "top 80%", // Start the animation when the top of the card hits 80% of the viewport height
        toggleActions: "play none none none" // Only play the animation once
      }
    });
  });


  

  const filterDiv = document.querySelectorAll(".filterDiv > div:nth-child(1)");
  const filterDivInfo = document.querySelectorAll(".filterDivInfo > ul");
  filterDiv.forEach((div, index) => {
    div.addEventListener("click", () => {
      filterDivInfo[index].style.display =
        filterDivInfo[index].style.display === "none" ? "flex" : "none";
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


const faqs = [
  question2 = {
      question: "What can I use in my clothing design?",
      answer: "You can seamlessly design and sell clothes on our platform that feature your unique designs. So, feel free to play around with different design patterns, images of nature, animals, pop culture icons, inspirational sayings, quirky art designs, retro themes, your own photos, brand logos, etc. If you don't have a design to upload, you can explore graphics in our online design tool and create a design in minutes."
  }
  ,
  question3 = {
      question: "Can you help me with building my online clothing store?",
      answer: "You can find helpful guides and resources in the blog section of our website that offer valuable information regarding setting up online clothing stores. Here's one post that you can get started with."
  }
  ,
  question4 = {
      question: "Is selling clothes online profitable?",
      answer: "Yes, you can design clothes and sell them online for a profit, given how well you understand your niche, design a business plan, choose your products to sell, create a competitive pricing strategy that includes all shipping costs, and promote your business using social media platforms and influencer marketing."
  }
  ,
  question5 = {
      question: "What is the best way to sell clothes online?",
      answer: "The best way to sell clothes is to combine a strong online presence with high-quality designs, competitive pricing, effective marketing strategies, and a reliable fulfillment partner like Gelato to ensure seamless production, fulfillment, and delivery. Gelato makes it convenient to design and sell clothes online!"
  }
]

const faqContainer = document.querySelector('.question-container');
faqs.forEach((faq, index) => {
  const contentContainer = document.createElement('div');
  contentContainer.className = 'content-container px-2 py-1 border-2 border-black rounded-sm w-[95%] flex flex-col items-center justify-center';
  contentContainer.innerHTML = `
  <div class="faq-header flex flex-row w-full items-center justify-between px-2 py-2 cursor-pointer">
      <div class="text-[18px] max-[640px]:text-[15px] font-jost">${faq.question}</div>
      <span class="open font-bold text-[20px] max-[640px]:text-[15px]">+</span>
      <span class="close font-bold text-[20px] hidden max-[640px]:text-[15px]">-</span>
  </div>
   <div class="content font-jost max-[640px]:text-[14px] flex flex-col items-start justify-center gap-2 px-2 py-2 text-[16px] hidden text-gray-500">
      <div>${faq.answer}</div>
  </div>
`;

  faqContainer.appendChild(contentContainer);
});

document.addEventListener('DOMContentLoaded', function () {
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
      header.addEventListener('click', function () {
          const contentContainer = this.closest('.content-container');
          const content = contentContainer.querySelector('.content');
          const openSpan = this.querySelector('.open');
          const closeSpan = this.querySelector('.close');

          faqHeaders.forEach(otherHeader => {
              const otherContainer = otherHeader.closest('.content-container');
              if (otherContainer !== contentContainer) {
                  const otherContent = otherContainer.querySelector('.content');
                  const otherOpenSpan = otherHeader.querySelector('.open');
                  const otherCloseSpan = otherHeader.querySelector('.close');
                  otherContent.classList.add('hidden');
                  otherContainer.classList.remove('open');
                  otherOpenSpan.classList.remove('hidden');
                  otherCloseSpan.classList.add('hidden');
              }
          });

          content.classList.toggle('hidden');
          contentContainer.classList.toggle('open');
          openSpan.classList.toggle('hidden');
          closeSpan.classList.toggle('hidden');
      });
  });
});

const faqSection = document.querySelector('.question-container');
gsap.from(faqSection,{
    duration: 1,
    opacity: 0,
    y: "50%",
    stagger : 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: faqSection,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    }

})
