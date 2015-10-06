// Scale Animation Setup
// .to('@target', @length, {@object})
var scale_tween = TweenMax.to(['#animate1', '#animate2'], 0.5, {
  alpha: 1,
  y: -30,
  ease: Linear.easeNone
});

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var tween_scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1"
})
.setTween(scale_tween) // trigger a TweenMax.to tween
.triggerHook(1)
.addTo(controller);
