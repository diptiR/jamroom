// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  $('.fashion_category').on('click', function(){
    $grid.isotope({ filter: '.fashion' });
  })

  $('.healthcare_category').on('click', function(){
    $grid.isotope({ filter: '.healthcare' });
  })

  $('.finance_category').on('click', function(){
    $grid.isotope({ filter: '.finance' });
  })

  $('.lifestyle_category').on('click', function(){
    $grid.isotope({ filter: '.lifestyle' });
  })

  $('.automobile_category').on('click', function(){
    $grid.isotope({ filter: '.automobile' });
  })

  $('.beauty_category').on('click', function(){
    $grid.isotope({ filter: '.beauty' });
  })
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    
  