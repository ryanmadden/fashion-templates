var container = $('#grid-wrapper');
var msnry;
// initialize Masonry after all images have loaded
imagesLoaded( container, function() {
  msnry = new Masonry( container[0], {
    itemSelector : '.item',
    columnWidth : 190,
    isFitWidth: true,
    gutter: 8,
    transitionDuration: '0.4s',
  });
});
