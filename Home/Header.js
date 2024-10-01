const shopByCulture = document.querySelector(".shopByCulture");
const shopByEvent = document.querySelector(".shopByEvent");
const shopByCultureData = {
  punjabi: {
    img: "https://t4.ftcdn.net/jpg/03/54/54/57/360_F_354545740_2jWTniz506QaPibrFX2emyhgZWtazjzr.jpg",
    title: "Punjabi",
  },
  gujrati: {
    img: "https://as2.ftcdn.net/jpg/03/54/54/51/160_F_354545101_5k3KNNE5OJnbCrhPdQThT16pxTdwPuqL.jpg",
    title: "Gujrati",
  },
  bengali: {
    img: "https://t3.ftcdn.net/jpg/03/54/54/60/240_F_354546021_Ew6OoPUO8rLPuJpkRWrhh97P64bJ7JhB.jpg",
    title: "Bengali",
  },
  southIndian: {
    img: "https://t3.ftcdn.net/jpg/03/54/54/58/240_F_354545871_pgAccspSyWKa8ll3GA9LSaij6nVUfSGK.jpg",
    title: "South Indian",
  },
  kerala: {
    img: "https://t4.ftcdn.net/jpg/03/54/54/55/240_F_354545504_Pot2kIKoMsSfKi2CeWO2lLRvt1GbF74V.jpg",
    title: "Kerala",
  },
  maharashtrian: {
    img: "https://t4.ftcdn.net/jpg/03/54/54/55/240_F_354545521_DuhFRiInrLnTO3npdjxuY1ZYwb0w9ChD.jpg",
    title: "Maharashtrian",
  },
  rajasthani: {
    img: "https://t4.ftcdn.net/jpg/03/54/54/57/240_F_354545796_rWQ94BIvZREmh95DDb2X72xL5lQgJJ71.jpg",
    title: "Rajasthani",
  },
  kashmiri: {
    img: "https://t3.ftcdn.net/jpg/03/54/54/52/240_F_354545295_SwDDI2FGl2TonWJNjhNmavcJ5uP3bkQt.jpg",
    title: "Kashmiri",
  },
  northEast: {
    img: "https://t3.ftcdn.net/jpg/03/54/54/58/240_F_354545817_D8ugCXVXD4loEqGObfP0KOJjmX88LZqO.jpg",
    title: "North East",
  },
};

const shopByEventData = {
  wedding: {
    img: "https://static.vecteezy.com/system/resources/thumbnails/040/181/468/small_2x/abstract-rainbow-nature-background-free-vector.jpg",
    title: "Wedding",
  },
  festival: {
    img: "https://t4.ftcdn.net/jpg/08/52/04/21/360_F_852042104_oNjKfcbciH8vGmG0uoAEeJNmyIuMbGis.jpg",
    title: "Festival",
  },
  party: {
    img: "https://wallpaper_finder.s3.amazonaws.com/wallpapers/thumbs_2/enjoying-party-vector.jpg",
    title: "Party",
  },
  casual: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4a2DCXjrmuPqcfAFYvROsa_orzGNLyNfpQ&s",
    title: "Casuals",
  },
  religious: {
    img: "https://img.freepik.com/free-vector/religious-symbol-abstract-concept-vector-illustration-world-religion-symbols-iconic-representation-latin-cross-star-david-religious-tradition-crescent-star-faith-abstract-metaphor_335657-6316.jpg",
    title: "Religious",
  },
  aniversary: {
    img: "https://img.freepik.com/free-vector/hand-drawn-happy-anniversary-lettering-background_52683-103167.jpg",
    title: "Anniversary",
  },
};
Object.keys(shopByCultureData).forEach((key) => {
  const data = shopByCultureData[key];
  const div = document.createElement("div");
  div.innerHTML = `
      <div style="overflow:hidden;" class="imageContainer">
        <img src="${data.img}" alt="" />
      </div>
      <p>${data.title}</p>
  `;
  shopByCulture.appendChild(div);
});

Object.keys(shopByEventData).forEach((key) => {
  const data = shopByEventData[key];
  const div = document.createElement("div");
  div.innerHTML = `
      <div style="overflow:hidden;" class="imageContainer">
        <img src="${data.img}" alt="" />
      </div>
      <p>${data.title}</p>
  `;
  document.querySelector(".shopByEvent").appendChild(div);
});
const cultureShow = document.querySelector(".cultureShow");
const eventShow = document.querySelector(".eventShow");

cultureShow.addEventListener("click", () => {
  shopByEvent.classList.remove("show");
  shopByCulture.classList.toggle("show");
});

eventShow.addEventListener("click", () => {
  shopByCulture.classList.remove("show");
  shopByEvent.classList.toggle("show");
});
