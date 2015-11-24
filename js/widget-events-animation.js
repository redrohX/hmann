var slide_big_down_scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-widget3"
})
    // trigger animation Velocity
    .setTween(".overlay-container", 0.5, {alpha: 1, y: 350})
    //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
    .addTo(controller)
    .triggerHook(0.75);


///////////////////
//MIRRORED Events//
///////////////////

var slide_down_scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-widget4"
})
// trigger animation Velocity
.setTween(".overlay-container-1", 1, {
  alpha: 1,
  y: 350
})
.addIndicators({name: "event menu"}) // add indicators (requires plugin)
.addTo(controller)
.triggerHook(0.90);

var slide_up_scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-widget4"
})
// trigger animation Velocity
.setTween(".overlay-container-2", 1, {
  alpha: 1,
  y: -350
})
.addIndicators({name: "event menu mirrored"}) // add indicators (requires plugin)
.addTo(controller)
.triggerHook(0.40);
