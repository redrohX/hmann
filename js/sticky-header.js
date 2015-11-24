// build scene
var stickyHeader = new ScrollMagic.Scene({
  offset: '80',
  duration: '0'
})
.setPin(".header--wrapper", {
    //pushFollowers: true
})
.addIndicators({name: "sticky-header"}) // add indicators (requires plugin)
.addTo(controller)
.setClassToggle(".header--wrapper", 'header--wrapper--sticky')
