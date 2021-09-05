var icon = document.getElementsByClassName("animated-icon2");
var sticky = document.getElementById("sticky-headeri");


window.onload = function () {


  window.onscroll = function () {
    navEffect();
    stickyHeaderEffect();


  };

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
function stickyHeaderEffect() {
  const stickyWrapper = document.createElement("div");
  var stickyHeight = sticky.offsetHeight;


  stickyWrapper.classList.add("sticky-wrapper");
  sticky.before(stickyWrapper);
  sticky.classList.add("sticky");
  console.log(sticky);


  if (window.pageYOffset >= 152) {
    stickyWrapper.style.height = stickyHeight;

    sticky.classList.add("is-sticky");
  } else {
    sticky.classList.remove("is-sticky");
    stickyWrapper.style.height = 'auto';
  }
}

// sticky div  
// var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
//   var stickyHeight = sticky.outerHeight();
//   var stickyTop = stickyWrapper.offset().top;
//   if (scrollElement.scrollTop() >= stickyTop) {
//     stickyWrapper.height(stickyHeight);
//     sticky.addClass("is-sticky");
//   }
//   else {
//     sticky.removeClass("is-sticky");
//     stickyWrapper.height('auto');
//   }
// };

