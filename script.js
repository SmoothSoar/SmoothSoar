TweenMax.from("#desc",1,{opacity:0, y: 60});

const tl = new TimelineMax({repeat: -1});
const rainText = document.querySelectorAll(".rain-text");

rainText.forEach(rain=>{
  const ani1 = TweenMax.to(rain, 3,{opacity:1,ease:Power4.easeInOut, fontSize : 4.5+"rem"},1 );
  const ani2 =TweenMax.to(rain, 2, {opacity:0, ease:Power4.easeInOut,  rotationX: 110, transformOrigin: "center bottom"},1);
  tl.add(ani1);
  tl.add(ani2);
})

// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}