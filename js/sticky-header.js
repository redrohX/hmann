// build scene
var stickyHeader = new ScrollMagic.Scene({
  offset: '70'
})
.setPin(".header--wrapper", {
    pushFollowers: false
})
.addIndicators({name: "sticky-header"}) // add indicators (requires plugin)
.addTo(controller);
