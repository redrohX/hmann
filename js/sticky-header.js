// build scene
var stickyHeader = new ScrollMagic.Scene({
  offset: '80',
  duration: '0'
})
.setPin(".nav", {
    //pushFollowers: true
})
.addIndicators({name: "sticky-nav"}) // add indicators (requires plugin)
.addTo(controller)
.setClassToggle(".nav", 'nav--sticky');
