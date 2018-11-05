$(document).ready(function(){

var $grid = $('.grid').isotope({
   itemSelector : '.game'
});

var filters = {};

$('.filters').on( 'click', '.button', function( event ) {
  var $button = $( event.currentTarget );
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  filters[ filterGroup ] = $button.attr('data-filter');
  var filterValue = concatValues( filters );
  $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});
  
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

$grid.isotope({ filter: '.energy' });
$grid.isotope({ filter: '.innovation' });
$grid.isotope({ filter: '.leadership' });
$grid.isotope({ filter: '.action' });
$grid.isotope({ filter: '.game' });
$grid.isotope({ filter: '.time1' });
$grid.isotope({ filter: '.time2' });
$grid.isotope({ filter: '.time3' }); 
$grid.isotope({ filter: '.time4' });
$grid.isotope({ filter: '.size1' });
$grid.isotope({ filter: '.size2' }); 
$grid.isotope({ filter: '.size3' });

    var grid = document.querySelector('.grid');
    var jQuerygrid = jQuery('.grid').isotope({
        itemSelector: '.game'
    }); 
    var iso = jQuerygrid.data('isotope');
    jQuerygrid.isotope( 'reveal', iso.items );

    imagesLoaded($grid, function(){
        iso.layout();
    });

$grid.isotope({ filter: '.game' });
$grid.isotope( 'reloadItems' )

});