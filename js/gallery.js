// cycles through each picture and corresponding location text and fades them both one after the other on the polaroid.

$("#slideshow > div:gt(0)").hide();
$('#snapshot-text p:gt(0)').hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
  $('#snapshot-text p:first-child')
  .fadeOut(1000)
  .next('p').fadeIn(1000)
  .end().appendTo('#snapshot-text');
}, 4000);
