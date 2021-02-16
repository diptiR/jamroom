// external js: isotope.pkgd.js

// init Isotope
var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
  getSortData: {
    name: ".name",
    symbol: ".symbol",
    number: ".number parseInt",
    category: "[data-category]",
    weight: function (itemElem) {
      var weight = $(itemElem).find(".weight").text();
      return parseFloat(weight.replace(/[\(\)]/g, ""));
    },
  },
});

$(".show_all").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: "*" });
});

$(".fashion_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: '.fashion' });
});

$(".healthcare_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".healthcare" });
});

$(".finance_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".finance" });
});

$(".lifestyle_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".lifestyle" });
});

$(".automobile_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".automobile" });
});

$(".beauty_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".beauty" });
});

$(".orchestral_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".orchestral" });
  $(".orchestral_category a").addClass("selected");
});

$(".ambient_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".ambient" });
  $(".ambient_category a").addClass("selected");
});

$(".blues_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".blues" });
  $(".blues_category a").addClass("selected");
});

$(".bollywood_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".bollywood" });
  $(".bollywood_category a").addClass("selected");
});

$(".classic_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".classic" });
  $(".classic_category a").addClass("selected");
});

$(".contemporary_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".contemporary" });
  $(".contemporary_category a").addClass("selected");
});

$(".dance_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".dance" });
  $(".dance_category a").addClass("selected");
});

$(".downtempo_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".downtempo" });
  $(".downtempo_category a").addClass("selected");
});

$(".electronic_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".electronic" });
  $(".electronic_category a").addClass("selected");
});

$(".funk_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".funk" });
  $(".funk_category a").addClass("selected");
});

$(".fusion_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".fusion" });
  $(".fusion_category a").addClass("selected");
});

$(".hiphop_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".hiphop" });
  $(".hiphop_category a").addClass("selected");
});

$(".indian_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".indian" });
  $(".indian_category a").addClass("selected");
});

$(".indie_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".indie" });
  $(".indie_category a").addClass("selected");
});

$(".jazz_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".jazz" });
  $(".jazz_category a").addClass("selected");
});

$(".pop_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".pop" });
  $(".pop_category a").addClass("selected");
});

$(".retro_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".retro" });
  $(".retro_category a").addClass("selected");
});

$(".rock_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".rock" });
  $(".rock_category a").addClass("selected");
});

$(".anthem_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".anthem" });
  $(".anthem_category a").addClass("selected");
});

$(".jingle_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".jingle" });
  $(".jingle_category a").addClass("selected");
});

$(".rap_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".rap" });
  $(".rap_category a").addClass("selected");
});

$(".score_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".score" });
  $(".score_category a").addClass("selected");
});

$(".vocal_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".vocal" });
  $(".vocal_category a").addClass("selected");
});

$(".chill_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".chill" });
  $(".chill_category a").addClass("selected");
});

$(".cool_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".cool" });
  $(".cool_category a").addClass("selected");
});

$(".emotional_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".emotional" });
  $(".emotional_category a").addClass("selected");
});

$(".empowering_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".empowering" });
  $(".empowering_category a").addClass("selected");
});

$(".humour_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".humour" });
  $(".humour_category a").addClass("selected");
});

$(".kids_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".kids" });
  $(".kids_category a").addClass("selected");
});

$(".quirky_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".quirky" });
  $(".quirky_category a").addClass("selected");
});

$(".romantic_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".romantic" });
  $(".romantic_category a").addClass("selected");
});

$(".sexy_category").on("click", function () {
  removeSelected();
  $grid.isotope({ filter: ".sexy" });
  $(".sexy_category a").addClass("selected");
});

$(".upbeat_category").on("click", function () {
  removeSelected();
  $(".upbeat_category a").addClass("selected");
  $grid.isotope({ filter: ".upbeat" });
});

$(".accoustic_category").on("click", function () {
  removeSelected();
  $(".accoustic_category a").addClass("selected");
  $grid.isotope({ filter: ".accoustic" });
});

function removeSelected() {
  $(".accoustic_category a").removeClass("selected");
  $(".upbeat_category a").removeClass("selected");
  $(".sexy_category a").removeClass("selected");
  $(".romantic_category a").removeClass("selected");
  $(".quirky_category a").removeClass("selected");
  $(".kids_category a").removeClass("selected");
  $(".humour_category a").removeClass("selected");
  $(".empowering_category a").removeClass("selected");
  $(".emotional_category a").removeClass("selected");
  $(".cool_category a").removeClass("selected");
  $(".chill_category a").removeClass("selected");
  $(".vocal_category a").removeClass("selected");
  $(".score_category a").removeClass("selected");
  $(".rap_category a").removeClass("selected");
  $(".jingle_category a").removeClass("selected");
  $(".anthem_category a").removeClass("selected");
  $(".rock_category a").removeClass("selected");
  $(".retro_category a").removeClass("selected");
  $(".pop_category a").removeClass("selected");
  $(".jazz_category a").removeClass("selected");
  $(".indie_category a").removeClass("selected");
  $(".indian_category a").removeClass("selected");
  $(".hiphop_category a").removeClass("selected");
  $(".fusion_category a").removeClass("selected");
  $(".funk_category a").removeClass("selected");
  $(".electronic_category a").removeClass("selected");
  $(".downtempo_category a").removeClass("selected");
  $(".dance_category a").removeClass("selected");
  $(".contemporary_category a").removeClass("selected");
  $(".classic_category a").removeClass("selected");
  $(".bollywood_category a").removeClass("selected");
  $(".blues_category a").removeClass("selected");
  $(".ambient_category a").removeClass("selected");
  $(".orchestral_category a").removeClass("selected");
}
