

//nav ani
setTimeout(function(){
    gsap.to("#nav", {
        duration: 1,
        opacity: 1,
        x: -140,
    })
}, 2000)

// nav items is clicked scrolling to the section
function scrollTheSection(selector){
    const selectorTop = selector.offsetTop;
    window.scrollTo({top: selectorTop, behavior: 'smooth'})
}


document.addEventListener('click', (event) => {
    const target = event.target.nodeName === 'LI' ? event.target : event.target.parentNode;
    const link = target.dataset.link;

    if(link == null) {
        return;
    }

    const selecMenu = document.querySelector(link);

    scrollTheSection(selecMenu);

    // nav items is clicked changing the color
    const selected = document.querySelector('.nav__items.selected');
    selected.classList.remove('selected');
    target.classList.add('selected');


})

//scrolling ths nav items has class selected

const sectionIds = ['#section1', '#section2', '#section3', '#section4', '#section5'];

const sections = sectionIds.map( id => document.querySelector(id));

const navItems = sectionIds.map( id => document.querySelector(`[data-link="${id}"]`));

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

function selectNavItem( selected ) {
    selectedNavItem.classList.remove("selected");
    selectedNavItem = selected;
    selectedNavItem.classList.add("selected");
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
}

const observerCallback = ( entries, observer ) => {
    entries.forEach( entry => {
        console.log(entry.target.id, entry.isIntersecting, entry.intersectionRatio, entry.boundingClientRect.y);
        if(!entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            if(entry.boundingClientRect.y < 0) {
                selectedNavIndex = index + 1;
            } else {
                selectedNavIndex = index - 1;
            }
        };

        if(selectedNavIndex == 1 || selectedNavIndex == 3 || selectedNavIndex == 4) {
            const nav = document.getElementById("nav");
            nav.classList.add("active");
        } else{
            nav.classList.remove("active");
        }
    })
} 


const observer = new IntersectionObserver( observerCallback, observerOptions);

sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
    selectNavItem(navItems[selectedNavIndex]);
    if ( window.scrollY === 0 ) {
        selectedNavIndex = 0 ;
    } else if ( Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
        selectedNavIndex = navItems.length - 1;
    }
})





//section01 title
$(".split").each(function () {
    let text = $(this).text();
    let split = text.split('').join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";

    $(this).html(split).attr("aria-label", text);
});

setTimeout(function () {
    gsap.to(".split span", {
        duration: 0.3,
        opacity: 1,
        y: 0,
        stagger: 0.1
    })
}, 500)


// skills circle
function color1(i,classname,colorname){
    $(classname).css({"background" : `conic-gradient(${colorname} 0% ${i}%, var(--light--blue) ${i}% 100%)`});
}

function draw(max, classname, colorname){
    var i=1;
    var func1 = setInterval(function(){
        if(i<max){
            color1(i,classname,colorname);
            i++;
        } else {
            clearInterval(func1);
        }
    },10);
}

draw(90, ".circle1", "var(--dark--blue)");
draw(85, ".circle2", "var(--dark--blue)");
draw(70, ".circle3", "var(--dark--blue)");
draw(90, ".circle4", "var(--dark--blue)");
draw(80, ".circle5", "var(--dark--blue)");