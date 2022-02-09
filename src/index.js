import './less/index.less'

// Your code goes here!
// console.log("this is a test");

/////////////////////////////////////////////////
// 1) Mouseover
/////////////////////////////////////////////////
let mouseOver = document.querySelector("nav.nav")

mouseOver.addEventListener("mouseover", function(e) {
    e.target.style.color = "yellow";
    setTimeout(function() {
        e.target.style.color = "";
        }, 100);
    }, false);
/////////////////////////////////////////////////
//2) Keydown
/////////////////////////////////////////////////
let all = document.querySelector("body")
// console.log(all);
function arrows(e) {
    console.log(e.key);
    if(e.key ==="ArrowDown") {
        e.target.style.color = "red";
    } else if (e.key ==="ArrowUp") {
        e.target.style.color = "yellow";
    } else if (e.key ==="ArrowRight") {
        e.target.style.color = "green";
    } else if (e.key ==="ArrowLeft") {
        e.target.style.color = "blue";
    } 
}
document.addEventListener("keydown", arrows); 
/////////////////////////////////////////////////
// 3) wheel
/////////////////////////////////////////////////
let heading = document.querySelector("h1");
// console.log(heading);
function wheel(e) {
    e.target.style.fontSize = "100px";
    console.log("this");
}
heading.addEventListener("wheel", wheel);
/////////////////////////////////////////////////
// 4) Load
/////////////////////////////////////////////////
let backgroundAll = document.querySelector("body");
window.addEventListener('load', (event) => {
    backgroundAll.style.background = "green";
});
/////////////////////////////////////////////////
// 5) focus
/////////////////////////////////////////////////
const change = document.querySelectorAll('input');

change.forEach(x => x.addEventListener('focus', (event) => {
    event.target.style.background = '#17A2B8';
}))
/////////////////////////////////////////////////
// 6) Blur
/////////////////////////////////////////////////
change.forEach(x => x.addEventListener('blur', (event) => {
    event.target.style.background = '';
}))
/////////////////////////////////////////////////
// 7) Resize
/////////////////////////////////////////////////
window.addEventListener('resize', () => {
    // console.log('resized');
    if (all.style.display === "none") {
    all.style.display = "block";
    } else {
    all.style.display = "none";
    }
});
/////////////////////////////////////////////////
// 8) Scroll
/////////////////////////////////////////////////
let headingReverse = document.querySelectorAll("h1, h2, h3, h4");
let paragraphReverse = document.querySelectorAll("p");
// console.log(headingReverse);
// console.log(headingReverse.length);
// console.log(paragraphReverse);
window.addEventListener('scroll', () => {
    for(let i=0;i<=paragraphReverse.length;i++) {
        // console.log(paragraphReverse[i]);
        paragraphReverse[i].style.color = "#FFEBCD";
      }
  });
  window.addEventListener('scroll', () => {
    for(let i=0;i<=headingReverse.length;i++) {
        console.log(headingReverse[i]);
        headingReverse[i].style.color = "chartreuse";
      }
  });
/////////////////////////////////////////////////
// 9) Select
/////////////////////////////////////////////////
const select = document.querySelector("textarea");
// console.log(select);
select.addEventListener("select", () => {
  if (select.textContent !== "") {
    select.style.color = "white";
    select.style.backgroundColor = "black";
    select.textContent = "You can't get rid of me!";
  }
});
/////////////////////////////////////////////////
// 10) Double Click
/////////////////////////////////////////////////
const double = document.getElementsByClassName("text-content");
// console.log(double);
double[0].addEventListener("dblclick", function( event ) {
  event.target.style.color = "cyan";
  setTimeout(function() {
    event.target.style.color = "";
  }, 600);
}, false);
double[1].addEventListener("dblclick", function( event ) {
  event.target.style.color = "cyan";
  setTimeout(function() {
    event.target.style.color = "";
  }, 600);
}, false);






// function add() {
//     image.classList.remove("destination");
// }


// paragraphReverse.forEach(el => el.addEventListener("click", em => {
//     console.log(`target: ${em.target}`)
//     console.log("hello");
// }))