// build scene
// var stickyHeader = new ScrollMagic.Scene({
//   offset: '80',
//   duration: '0'
// })
// .setPin(".nav", {
//     //pushFollowers: true
// })
// .addIndicators({name: "sticky-nav"}) // add indicators (requires plugin)
// .addTo(controller)
// .setClassToggle(".nav", 'nav--sticky');


$(function() {
    var header = $(".header--wrapper");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            header.addClass("header--wrapper--sticky");
            console.log("sticky")
            headerAnim.play()
        } else {
            header.removeClass("header--wrapper--sticky");
            console.log("notsticky")
            headerAnim.reverse()
       }
    });
});


var headerAnim = new TimelineLite({paused:true});
headerAnim.to(".nav", 1, {
  opacity: '0.9',
  ease:Back.easeOut
});
