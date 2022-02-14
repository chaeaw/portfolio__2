// works slides js


// redesign

const redesignSlide = document.querySelector(".redesign__slides .slides__flex");
const redesignSlides = document.querySelectorAll(".redesign__slides .slides__flex li");
let redesignCurrentIdx = 0;
const redesignSlideCnt = redesignSlides.length;
const redesignPrev = document.querySelector(".redesign__slides .redesign__prev");
const redesignNext = document.querySelector(".redesign__slides .redesign__next");
const slideWidth = 75;

redesignSlide.style.width = slideWidth * redesignSlideCnt + "vw";

function moveRedesign(num){
    redesignSlide.style.left = -num * 75 + "vw";
    redesignCurrentIdx = num;
    redesignSlides.forEach((e) => {
        console.log(e);
        e.classList.remove("active");
    })
    const target = redesignSlides[num];
    target.classList.add("active");
}

redesignPrev.addEventListener("click", function(){
    if(redesignCurrentIdx !== 0) { 
        moveRedesign(redesignCurrentIdx - 1);
    };
});

redesignNext.addEventListener("click", function(){
    if(redesignCurrentIdx !== redesignSlideCnt - 1) {
        moveRedesign(redesignCurrentIdx + 1);
    }
})



// create

const createSlide = document.querySelector(".create__slides .slides__flex");
const createSlides = document.querySelectorAll(".create__slides .slides__flex li");
let createCurrentIdx = 0;
const createSlideCnt = createSlides.length;
const createPrev = document.querySelector(".create__slides .create__prev");
const createNext = document.querySelector(".create__slides .create__next");

createSlide.style.width = slideWidth * createSlideCnt + "vw";

function moveCreate(num){
    createSlide.style.left = -num * 75 + "vw";
    createCurrentIdx = num;
    createSlides.forEach((e) => {
        e.classList.remove("active");
    })
    const target = createSlides[num];
    target.classList.add("active");
}

createPrev.addEventListener("click", function(){
    if(createCurrentIdx !== 0) { 
        moveCreate(createCurrentIdx - 1) 
    };
});

createNext.addEventListener("click", function(){
    if(createCurrentIdx !== createSlideCnt - 1) {
        moveCreate(createCurrentIdx + 1);
    };
})