// works slides js

// redesign

const redesignSlide = document.querySelector(".redesign__slides .slides__flex");
const redesignSlides = document.querySelectorAll(".redesign__slides .slides__flex li");
let redesignCurrentIdx = 0;
const redesignSlideCnt = redesignSlides.length;
const redesignPrev = document.querySelector(".redesign__slides .redesign__prev");
const redesignNext = document.querySelector(".redesign__slides .redesign__next");
var slideWidth =  100;


function moveRedesign(num){
    
    redesignSlide.style.left = -num * slideWidth + "vw";
    
    redesignCurrentIdx = num;
    redesignSlides.forEach((e) => {
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

// mobile redesign slide
let redesignPos = {
    prev : 0,
    now : 0
}

function redesign_touchStart(e){
    redesignPos.prev = e.touches[0].pageX;    
}

function redesign_touchEnd(e){
    e = e || window.event;
    redesignPos.now = e.changedTouches[0].pageX;
    redesignFinalEnd();
}

function redesignFinalEnd(){
    if(redesignPos.prev > redesignPos.now){
        if(redesignCurrentIdx !== redesignSlideCnt - 1) {
            moveRedesign(redesignCurrentIdx + 1);        

        };
    } else {
        if(redesignCurrentIdx !== 0) { 
            moveRedesign(redesignCurrentIdx - 1);
        }
    }
}

redesignSlide.addEventListener("touchstart", redesign_touchStart);
redesignSlide.addEventListener("touchend", redesign_touchEnd);




// create

const createSlide = document.querySelector(".create__slides .slides__flex");
const createSlides = document.querySelectorAll(".create__slides .slides__flex li");
let createCurrentIdx = 0;
const createSlideCnt = createSlides.length;
const createPrev = document.querySelector(".create__slides .create__prev");
const createNext = document.querySelector(".create__slides .create__next");


function moveCreate(num){

    createSlide.style.left = -num * slideWidth + "vw";

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


// mobile create slide
let createPos = {
    prev : 0,
    now : 0
}

function create_touchStart(e){
    createPos.prev = e.touches[0].pageX;    
}

function create_touchEnd(e){
    e = e || window.event;
    createPos.now = e.changedTouches[0].pageX;
    createFinalEnd();
}

function createFinalEnd(){
    if(createPos.prev > createPos.now){
        if(createCurrentIdx !== createSlideCnt - 1) {
            moveCreate(createCurrentIdx + 1);        

        };
    } else {
        if(createCurrentIdx !== 0) { 
            moveCreate(createCurrentIdx - 1);
        }
    }
}

createSlide.addEventListener("touchstart", create_touchStart);
createSlide.addEventListener("touchend",create_touchEnd);



// all

function tabletSlide() {
    var winW = window.innerWidth;
    console.log(winW)
    if (winW < 1024 ){
        slideWidth = 100;
    } else {
        slideWidth = 75;
    }
    redesignSlide.style.width = slideWidth * redesignSlideCnt + "vw";
    createSlide.style.width = slideWidth * createSlideCnt + "vw";

    redesignSlide.style.left = -redesignCurrentIdx * slideWidth + "vw";
    createSlide.style.left = -createCurrentIdx * slideWidth + "vw";

}

window.addEventListener("resize", tabletSlide);
window.addEventListener("load", tabletSlide);


