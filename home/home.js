var container = $('#grid-wrapper');
container.imagesLoaded(function(){
  var msnry = new  Masonry(container[0], {
    itemSelector : '.item',
    columnWidth : 234,
    isFitWidth: true,
    gutterWidth: 10,
    transitionDuration: '0.4s',
  });
});
