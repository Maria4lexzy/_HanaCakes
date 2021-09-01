
// $(function () {
//     $(window).on('scroll', function () {
//         if ( $(window).scrollTop() > 10 ) {
//             $('.navbar').addClass('active');
//         } else {
//             $('.navbar').removeClass('active');
//         }
//     });
// });
window.onscroll = function() {myFunction()};

function myFunction() {
    var navElement=document.getElementsByClassName("navbar");
    console.log(navElement)
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navElement[0].classList.add("active");
    console.log("lal")
  } else {
    navElement[0].classList.remove("active")
    console.log("lalss")

  }
}