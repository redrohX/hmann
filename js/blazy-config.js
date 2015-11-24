lazyLoad = function () {
    var bLazy = new Blazy({
        selector: '.lazy-load',
        offset: 120
    });
};

$(document).ready(function(){
  lazyLoad();
});
