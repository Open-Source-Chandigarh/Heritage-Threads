window.addEventListener("load",()=>{
    setTimeout(()=>{
        document.querySelector("#loader").style.display= `none`;
        
    },1000)
})
// NAVBAR ADVERTISEMENT
const navbar  = document.querySelector(".navbarText");
const navbarAnimation =gsap.fromTo(navbar,
    {
    duration: 14,
    x: "220%",
    ease: "linear",
    repeat: -1,
    yoyo:true,
    paused:false
},{
    duration: 20,
    x: "-200%",
    ease: "linear",
    repeat: -1,
}
)
//PAUSE ADVERTISEMENT ON HOVER
navbar.addEventListener("mouseenter", () => navbarAnimation.pause());
navbar.addEventListener("mouseleave", () => navbarAnimation.play());

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

// COLLAPSE BUTTON
function toggleText() {
    const myText = document.querySelector(".productsText");
    if (myText.style.display === "none") {
        myText.style.display = "block";
        document.getElementById("collapseButton").textContent = "COLLAPSE";
    } else {
        myText.style.display = "none";
        document.getElementById("collapseButton").textContent = "SHOW MORE";
    }
}
toggleText();

// REVIEW CARD
const myInfo = {
    obj1 : {
        name: "Prashant Karulkar",
        rating: 5,
        review: "Very nice product, brought 2 shirts from them, really nice fit and Comfortable to wear, looks good, worth it in this range.It is excellent, colour is good,the size also fited to me .",
        date: "1 year ago",
        title : "GREAT FIT AND EXCEEDED MY EXPECTATIONS",
        likeCount: 420,
        dislikeCount: 33,
        profilePic: "PK",
    },
    obj2 : {
        name: "Harmanjot Singh",
        rating: 3,
        review: "I recently purchased this shirt and I'm quite impressed. My only minor complaint is that it wrinkles easily, but that's manageable. Overall, a great addition to my wardrobe!",
        date: "2 year ago",
        title : "IT IS A GOOD PRODUCT BUT THE SIZE IS NOT GOOD",
        likeCount: 20,
        dislikeCount: 44,
        profilePic: "HS",
    },
    obj3 : {
        name: "Harsh Singla",
        rating: 4,
        review: "I recently purchased this shirt and I'm absolutely thrilled with it! The fit is perfect, hugging my body in all the right places without feeling restrictive and it's really comfortable.",
        title : " PRODUCT AND COMFORTABLE",
        likeCount: 256,
        dislikeCount: 63,
        profilePic: "HS",
    },
    obj4 : {
        name: "Farman Sidhu",
        rating: 2,
        review: "Extremely disappointed with this purchase. The fabric is poor and started pilling after one wash. The fit is completely off, too tight in the shoulders, too loose around my waist.",
        date: "4 year ago",
        title : "THE QUALITY IS NOT GOOD",
        likeCount: 7,
        dislikeCount: 12,
        profilePic: "FS",
    },
    obj5 : {
        name: "Tanishq",
        rating: 5,
        review: "The fabric is incredibly soft and breathable, making it comfortable for all-day wear. I especially love the attention to detail in the stitching and buttons and its impressive ",
        date: "2 months ago",
        title : "WONDERFUL PRODUCT BUT WOULD LOVE MORE DIVERSE COLORS",
        likeCount: 186,
        dislikeCount: 4,
        profilePic: "TQ",
    },
    
    
}
function propagateReviewCard() {
    const reviewContainer = document.getElementById('reviewContainer');
    const reviewCard = document.getElementById('reviewCard');
    Object.values(myInfo).forEach((review, index) => {
        const clonedReviewCard = reviewCard.cloneNode(true);
        clonedReviewCard.querySelector('.reviewer-name').textContent = review.name;
        clonedReviewCard.querySelector('.rating').textContent = '⭐'.repeat(review.rating);
        clonedReviewCard.querySelector('.review-text').textContent = review.review;
        clonedReviewCard.querySelector('.review-date').textContent = review.date;
        clonedReviewCard.querySelector('.review-title').textContent = review.title;
        clonedReviewCard.querySelector('.like-count').textContent = review.likeCount;
        clonedReviewCard.querySelector('.dislike-count').textContent = review.dislikeCount;
        clonedReviewCard.querySelector('#profilePic').textContent = review.profilePic;
        if (index === 0) {
            reviewContainer.replaceChild(clonedReviewCard, reviewCard);
        } else {
            reviewContainer.appendChild(clonedReviewCard);
        }
    });
}
 propagateReviewCard();

// SWITCH IMAGES CODE 
document.addEventListener('DOMContentLoaded', () => {
  const sideImages = document.querySelectorAll('.sideImageContainer .productImage');
  const mainImage = document.querySelector('.productImageMainContainer .productImageMain');
  sideImages.forEach(image => {
    image.addEventListener('click', () => {
      mainImage.src = image.src;
    });
  });
});


