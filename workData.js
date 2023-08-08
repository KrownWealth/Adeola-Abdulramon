// Animating work instances on scroll
let observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    const [textbox, picture] = Array.from(entry.target.children);
    if (entry.isIntersecting) {
      picture.classList.remove("transform");
      Array.from(textbox.children).forEach(
        (el) => (el.style.animationPlayState = "running")
      );
    }
  },
  { threshold: 0.3 }
);

let workData = [

  {
    id: 0,
    workTitle: "deski VR website",
    workText: "Deski delivered blazing performance, striking word solution. Built with:",
    source: "https://deski-vr-website.vercel.app/",
    img: "./assets/images/Deski-Saas-Software-HTML-Template.png",
    btn: "Explore this project",
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
    ]
  },
  {
    id: 1,
    workTitle: "clothccessories.com",
    workText: "An e-ccommerce shopping website, with add-to-cart functionality and accept payment processing. Created with :",
    source: "https://github.com/KrownWealth/Clothccessories",
    img: "./assets/images/myclothccessories.png",
    btn: "Explore this project",
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Bootstrap"
    ]
  },
  {
    id: 2,
    workTitle: "Quote Generator",
    workText: "Automatic generate new quote when new quote button is triggered. Created with:",
    source: "https://krownwealth.github.io/quote_gen/",
    img: "./assets/images/Quote-Generator.png",
    btn: "Explore this project",
    skills: [{
        skill1: "JavaScript"
      }

    ]
  },
  {
    id: 3,
    workTitle: "Ascentfoods.com",
    workText: "Converted Figma design to a pixel-perfect wordpress website. Designed with:",
    source: "https://ascentfoods.com/",
    img: "./assets/images/Home-Ascent-Foods.png",
    btn: "Explore this project",
    skills: [
      "WordPress"
    ]
  },
  {
    id: 4,
    workTitle: "Rennie's blog",
    workText: "Redesign Rennie's blog to a professional wordpress blog design. Redesigned using:",
    source: "https://renniecurran.com/news-grid/",
    img: "./assets/images/Blog-Rennie-Curran.png",
    btn: "Explore this project",
    skills: [
      "WordPress",
      "Elementor Pro"
    ]
  },
  {
    id: 5,
    workTitle: "PetMe",
    workText: "Contributed to an open-source PetMe project. Improved the each-pet profile card design.",
    source: "https://akshitagupta15june.github.io/PetMe/",
    img: "./assets/images/PetMe.png",
    btn: "Explore this project",
    skills: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
    ]
  },
  {
    id: 6,
    workTitle: "ThePlace.com.ng",
    workText: "Developed an online restaurant food ordering system.",
    source: "https://theplace.com.ng/",
    img: "./assets/images/RestaurantThePlace.png",
    btn: "Explore this project",
    skills: [
      "WordPress"
    ]
  },
]


const currentItems = 3;
let currentItemsToShow = currentItems;

const workContainer = document.getElementById('workContainer');
const loadMoreBtn = document.querySelector('.btn.btn-lg')
// const loadMoreBtn = document.getElementById('load-more-btn');
let contentToDisplay =[];

let generateWork = () => {
  const contentToDisplay = workData
    .slice(0, currentItemsToShow)
    .map((x) => {
      let {
        id,
        workTitle,
        workText,
        source,
        img,
        btn,
        skills
      } = x;
      const skillsList = skills.map((skill) =>
        `<li>${skill}</li>`
      ).join('');

      return `
        <div class="work-box">
          <div class="work-textbox">
            <h3 class="h3">${workTitle}</h3>
            <p class="work-text">${workText}</p>
            <ol class="work-technologies">
            ${skillsList}
          </ol>
          <div class="work-links">
              <a href=${source} target="_blank" rel="noopener" class="link">${btn}</a>
              <a href=${source} target="_blank" rel="noopener" title="Source code">
              <img src=${img} alt="GitHub" loading="lazy" />
              </a>
            </div>
          </div>
          <picture class="work-img">
            <img loading="lazy" src=${img} alt="Clothccessories"/>
          </picture>
        </div>
      `;
    })
    .join("");

  workContainer.innerHTML = contentToDisplay;

  const workEls = document.querySelectorAll(".work-box");
  workEls.forEach((workEl) => {
    observer.observe(workEl);
  });

//   workContainer.innerHTML = contentToDisplay;
//   if (currentItemsToShow >= workData.length) {
//     loadMoreBtn.style.display = "block";
//   } else {
//     loadMoreBtn.style.display = "block";
//   }
// };


loadMoreBtn.addEventListener("click", function (el) {
  workContainer.innerHTML = contentToDisplay;
  for(let i = currentItems; i < currentItems+1; i++){
    setTimeout(function(){
      
      if(currentItems >= workData.length){
        loadMoreBtn.style.display = 'none';
        //contentToDisplay[i].style.display = 'block'
      }else{
        loadMoreBtn.style.display = 'block';
      }
      
    }, 3000)
  }
};


loadMoreBtn.addEventListener("click", function () {
  currentItemsToShow += 1;

 generateWork();
});


generateWork();
