var icon = document.getElementsByClassName("animated-icon2");
var sticky = document.getElementById("sticky-header");
var accordionContainer = document.getElementById("accordion-container");
const stickyWrapper = document.createElement("div");

var stickyTop;


// Nav bar onScroll page effect
window.onscroll = function () {
  navEffect();
  stickyHeaderEffect();
};

// Add/remove .active class to navbar on scroll
function navEffect() {
  var navElement = document.getElementsByClassName("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navElement[0].classList.add("active");
  } else {
    navElement[0].classList.remove("active")

  }
}
// toggle open class to the navigation toggle button
function toggleBtnEffect() {
  icon[0].classList.toggle("open");

}
// Add the is-sticky class to the header when you reach its scroll position. 
//Remove "is-sticky" when you leave the scroll position
//used in E-shop.html
function stickyHeaderEffect() {
  var stickyHeight = sticky.offsetHeight;


  stickyWrapper.classList.add("sticky-wrapper");
  sticky.before(stickyWrapper);
  sticky.classList.add("sticky");
  stickyTop = stickyWrapper.offsetTop;
  console.log(stickyTop);


  if (window.pageYOffset >= stickyTop) {
    stickyWrapper.style.height = stickyHeight;
    sticky.classList.add("is-sticky");
    accordionContainer.classList.remove("container");
  } else {
    sticky.classList.remove("is-sticky");
    accordionContainer.classList.add("container");
    stickyWrapper.style.height = 'auto';
  }


}




