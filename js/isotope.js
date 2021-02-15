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

  $('.orchestral_category').on('click', function(){
    $grid.isotope({ filter: '.orchestral' });
  })

  $('.ambient_category').on('click', function(){
    $grid.isotope({ filter: '.ambient' });
  })

  $('.blues_category').on('click', function(){
    $grid.isotope({ filter: '.blues' });
  })

  $('.bollywood_category').on('click', function(){
    $grid.isotope({ filter: '.bollywood' });
  })

  $('.classic_category').on('click', function(){
    $grid.isotope({ filter: '.classic' });
  })

  $('.contemporary_category').on('click', function(){
    $grid.isotope({ filter: '.contemporary' });
  })

  $('.dance_category').on('click', function(){
    $grid.isotope({ filter: '.dance' });
  })

  $('.downtempo_category').on('click', function(){
    $grid.isotope({ filter: '.downtempo' });
  })

  $('.electronic_category').on('click', function(){
    $grid.isotope({ filter: '.electronic' });
  })

  $('.funk_category').on('click', function(){
    $grid.isotope({ filter: '.funk' });
  })

  $('.fusion_category').on('click', function(){
    $grid.isotope({ filter: '.fusion' });
  })

  $('.hiphop_category').on('click', function(){
    $grid.isotope({ filter: '.hiphop' });
  })

  $('.indian_category').on('click', function(){
    $grid.isotope({ filter: '.indian' });
  })

  $('.indie_category').on('click', function(){
    $grid.isotope({ filter: '.indie' });
  })

  $('.jazz_category').on('click', function(){
    $grid.isotope({ filter: '.jazz' });
  })

  $('.pop_category').on('click', function(){
    $grid.isotope({ filter: '.pop' });
  })

  $('.retro_category').on('click', function(){
    $grid.isotope({ filter: '.retro' });
  })

  $('.rock_category').on('click', function(){
    $grid.isotope({ filter: '.rock' });
  })

  $('.anthem_category').on('click', function(){
    $grid.isotope({ filter: '.anthem' });
  })

  $('.jingle_category').on('click', function(){
    $grid.isotope({ filter: '.jingle' });
  })

  $('.rap_category').on('click', function(){
    $grid.isotope({ filter: '.rap' });
  })

  $('.score_category').on('click', function(){
    $grid.isotope({ filter: '.score' });
  })

  $('.vocal_category').on('click', function(){
    $grid.isotope({ filter: '.vocal' });
  })

  $('.chill_category').on('click', function(){
    $grid.isotope({ filter: '.chill' });
  })

  $('.cool_category').on('click', function(){
    $grid.isotope({ filter: '.cool' });
  })

  $('.emotional_category').on('click', function(){
    $grid.isotope({ filter: '.emotional' });
  })

  $('.empowering_category').on('click', function(){
    $grid.isotope({ filter: '.empowering' });
  })

  $('.humour_category').on('click', function(){
    $grid.isotope({ filter: '.humour' });
  })

  $('.kids_category').on('click', function(){
    $grid.isotope({ filter: '.kids' });
  })

  $('.quirky_category').on('click', function(){
    $grid.isotope({ filter: '.quirky' });
  })

  $('.romantic_category').on('click', function(){
    $grid.isotope({ filter: '.romantic' });
  })

  $('.sexy_category').on('click', function(){
    $grid.isotope({ filter: '.sexy' });
  })

  $('.upbeat_category').on('click', function(){
    $grid.isotope({ filter: '.upbeat' });
  })

  $('.accoustic_category').on('click', function(){
    $grid.isotope({ filter: '.accoustic' });
  })




  

    
  