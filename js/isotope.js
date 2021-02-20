// external js: isotope.pkgd.js

const videosData = [
  {
    title: "Porsche",
    detail: "2021",
    videoId: "XaxWxgt2wCk",
    genre_style_mood: "ORCHESTRAL SCORE EMPOWERING",
    product: "AUTOMOBILE",
  },
  {
    title: "Durex Flavours",
    detail: "Yacht",
    videoId: "VER79ZWPKKg",
    genre_style_mood: "DOWNTEMPO CONTEMPORARY VOCAL JINGLE COOL SEXY",
    product: "HEALTHCARE",
  },
  {
    title: "Puma",
    detail: "Future Rider",
    videoId: "jWIJlhlxsRc",
    genre_style_mood: "HIPHOP SCORE VOCAL JINGLE UPBEAT COOL QUIRKY",
    product: "FASHION",
  },
  {
    title: "Grab",
    detail: "Never Stop",
    videoId: "Be5rchs7two",
    genre_style_mood:
      "AMBIENT ELECTRONIC DOWNTEMPO CONTEMPORARY VOCAL SCORE EMOTIONAL EMPOWERING",
    product: "LIFESTYLE",
  },
  {
    title: "Johnnie Walker",
    detail: "#walkinwithjohnnie​",
    videoId: "vkQxdn2aN2U",
    genre_style_mood:
      "ELECTRONIC CONTEMPORARY CONTEMPORARY SCORE ANTHEM UPBEAT EMPOWERING",
    product: "LIFESTYLE",
  },
  {
    title: "OCBC Bank",
    detail: "Unstoppable",
    videoId: "CC4xHJVhsz4",
    genre_style_mood:
      "ELECTRONIC DANCE CONTEMPORARY SCORE ANTHEM VOCAL UPBEAT COOL EMPOWERING",
    product: "FINANCE",
  },
  {
    title: "Coca Cola",
    detail: "Good Afternoon",
    videoId: "T_L-BA8uLi0",
    genre_style_mood: "POP DANCE CONTEMPORARY VOCAL JINGLE UPBEAT COOL QUIRKY",
    product: "F&B",
  },
  {
    title: "DBS Treasures",
    detail: "This is Digibanking",
    videoId: "bAe3-V_St-g",
    genre_style_mood:
      "HIPHOP ELECTRONIC CONTEMPORARY VOCAL SCORE UPBEAT COOL QUIRKY",
    product: "FINANCE",
  },
  {
    title: "Absolut",
    detail: "Create a Better Tomorrow",
    videoId: "Vx66wnPgJRo",
    genre_style_mood:
      "ELECTRONIC ROCK CONTEMPORARY SCORE VOCAL ANTHEM UPBEAT EMPOWERING",
    product: "F&B",
  },
  {
    title: "Lux Arabia",
    detail: "Be Ready",
    videoId: "iNY7Jg6Pj7Y",
    genre_style_mood:
      "ELECTRONIC POP CONTEMPORARY VOCAL ANTHEM JINGLE UPBEAT EMPOWERING",
    product: "BEAUTY",
  },
  {
    title: "Jabong",
    detail: "Be You",
    videoId: "s2tBM7vrEwQ",
    genre_style_mood:
      "ORCHESTRAL CLASSIC JAZZ RETRO VOCAL JINGLE ROMANTIC EMOTIONAL EMPOWERING",
    product: "FASHION",
    thumbnailImg: "default.jpg",
  },
  {
    title: "Volkswagen Tiguan All Space",
    detail: "Fits All",
    videoId: "u5L0XLQxmxU",
    genre_style_mood: "ELECTRONIC DANCE CONTEMPORARY SCORE UPBEAT COOL",
    product: "AUTOMOBILE",
  },
  {
    title: "Wild Spirit",
    detail: "Never Ending Summer",
    videoId: "ktL0TWn_h20",
    genre_style_mood: "ELECTRONIC DANCE CONTEMPORARY SCORE UPBEAT COOL SEXY",
    product: "FASHION",
  },
  {
    title: "Hero Motocorp",
    detail: "We Ride",
    videoId: "BFIwQyhOLEg",
    genre_style_mood:
      "ROCK INDIE BLUES CONTEMPORARY VOCAL ANTHEM JINGLE UPBEAT EMPOWERING",
    product: "AUTOMOBILE",
  },
  {
    title: "Cream Silk Philippines",
    detail: "Conditioned for Greater",
    videoId: "AfsQudX_tC0",
    genre_style_mood:
      "ELECTRONIC ORCHESTRAL CONTEMPORARY ANTHEM SCORE UPBEAT EMPOWERING",
    product: "BEAUTY",
  },
  {
    title: "Britannia Little Hearts",
    detail: "Valentine's Special",
    videoId: "-i-l81ACTsk",
    genre_style_mood: "INDIE ACCOUSTIC VOCAL JINGLE ROMANTIC UPBEAT QUIRKY",
    product: "F&B",
  },
  {
    title: "Volkswagen Tiguan",
    detail: "For the Journeys Within",
    videoId: "pkuX4wMbX1A",
    genre_style_mood: "AMBIENT ELECTRONIC DOWNTEMPO SCORE CHILL EMPOWERING",
    product: "AUTOMOBILE",
    thumbnailImg: "default.jpg",
  },
  {
    title: "Tresemme",
    detail: "Shower Radio",
    videoId: "fxfOLeuqNcw",
    genre_style_mood:
      "ELECTRONIC POP DANCE CONTEMPORARY VOCAL JINGLE UPBEAT COOL",
    product: "BEAUTY",
  },
  {
    title: "Skechers",
    detail: "Go Like Never Before",
    videoId: "ixOPQn_6BzM",
    genre_style_mood:
      "ELECTRONIC CONTEMPORARY VOCAL SCORE UPBEAT COOL EMPOWERING",
    product: "FASHION",
  },
  {
    title: "Hotstar",
    detail: "Premiere Nights",
    videoId: "p3mZxkE-q7A",
    genre_style_mood: "HIPHOP CONTEMPORARY SCORE UPBEAT COOL",
    product: "LIFESTYLE",
  },
  {
    title: "Durex",
    detail: "Mutual Climax",
    videoId: "zEjZvDd9L4U",
    genre_style_mood: "DOWNTEMPO ELECTRONIC VOCAL SCORE COOL SEXY",
    product: "HEALTHCARE",
  },
  {
    title: "Lux Hair",
    detail: "Shine",
    videoId: "SCsNwczNfro",
    genre_style_mood:
      "ELECTRONIC POP CONTEMPORARY SCORE VOCAL ANTHEM UPBEAT EMPOWERING",
    product: "BEAUTY",
    thumbnailImg: "default.jpg",
  },
  {
    title: "Pepe Jeans",
    detail: "&nbsp;",
    videoId: "GgLEgGogzBg",
    genre_style_mood: "ELECTRONIC DANCE CONTEMPORARY SCORE UPBEAT COOL",
    product: "FASHION",
  },
  {
    title: "Mahindra",
    detail: "Alturas G4",
    videoId: "vq6kmD3aMAs",
    genre_style_mood: "ORCHESTRAL RETRO VOCAL SCORE EMPOWERING",
    product: "AUTOMOBILE",
  },
  {
    title: "Myntra",
    detail: "Beauty Edit",
    videoId: "ogHmgQWQN0I",
    genre_style_mood:
      "ELECTRONIC ROCK POP CONTEMPORARY VOCAL JINGLE UPBEAT COOL EMPOWERING",
    product: "FASHION",
  },
  {
    title: "Jabong",
    detail: "Out of This World",
    videoId: "GqxYTFNd2B4",
    genre_style_mood:
      "ELECTRONIC POP DANCE CONTEMPORARY VOCAL JINGLE UPBEAT COOL QUIRKY",
    product: "FASHION",
  },
  {
    title: "Volkswagen Passat",
    detail: "Luxury You Can't Give Up",
    videoId: "W69sKwwbOKY",
    genre_style_mood:
      "ELECTRONIC FUSION CONTEMPORARY VOCAL SCORE UPBEAT COOL EMPOWERING",
    product: "AUTOMOBILE",
    thumbnailImg: "default.jpg",
  },
  {
    title: "Bournvita Biscuits",
    detail: "Bananas and Oats",
    videoId: "cwVoIrcUdKE",
    genre_style_mood: "RETRO JAZZ SCORE UPBEAT QUIRKY HUMOUR",
    product: "F&B",
  },
  {
    title: "Bata Woman",
    detail: "Comfortable With It",
    videoId: "qANNAMY0YBk",
    genre_style_mood:
      "AMBIENT ELECTRONIC DOWNTEMPO ACCOUSTIC VOCAL SCORE EMOTIONAL EMPOWERING CHILL",
    product: "FASHION",
  },
  {
    title: "Tata Tiago",
    detail: "Hide and Seek",
    videoId: "TYtlnYaneWQ",
    genre_style_mood:
      "FUNK DANCE POP CONTEMPORARY VOCAL JINGLE UPBEAT COOL QUIRKY",
    product: "AUTOMOBILE",
  },
  {
    title: "Lakmé",
    detail: "Absolute Spotlight",
    videoId: "Xl6kLmavhmg",
    genre_style_mood: "ELECTRONIC CONTEMPORARY SCORE UPBEAT COOL",
    product: "BEAUTY",
  },
  {
    title: "Kia Seltos",
    detail: "Badass by Design",
    videoId: "ULBNSW1CgWw",
    genre_style_mood: "CONTEMPORARY ELECTRONIC SCORE COOL UPBEAT",
    product: "AUTOMOBILE",
  },
  {
    title: "MitTV",
    detail: "Kiska Hai",
    videoId: "fzmXHquUnIw",
    genre_style_mood:
      "RETRO POP BOLLYWOOD INDIAN VOCAL JINGLE UPBEAT QUIRKY HUMOUR",
    product: "LIFESTYLE",
  },
  {
    title: "Rajasthan Royals",
    detail: "Halla Bol",
    videoId: "omr2dgb0SDs",
    genre_style_mood: "BOLLYWOOD INDIAN VOCAL ANTHEM UPBEAT EMPOWERING",
    product: "LIFESTYLE",
  },
  {
    title: "TVS Sport",
    detail: "15 Ka Dum",
    videoId: "iqH9DawATWw",
    genre_style_mood:
      "INDIAN BOLLYWOOD CONTEMPORARY SCORE UPBEAT QUIRKY HUMOUR",
    product: "AUTOMOBILE",
  },
  {
    title: "Flipkart",
    detail: "Choose Your Age",
    videoId: "eM5NbAP69fo",
    genre_style_mood:
      "POP CONTEMPORARY VOCAL ANTHEM UPBEAT EMPOWERING EMOTIONAL",
    product: "LIFESTYLE",
  },
  {
    title: "Royal Enfield",
    detail: "Celebrate the Dark",
    videoId: "HjOeyKiNsuI",
    genre_style_mood:
      "RETRO ROCK BLUES INDIE ACCOUSTIC VOCAL JINGLE ANTHEM UPBEAT EMPOWERING",
    product: "AUTOMOBILE",
  },
  {
    title: "Nexa",
    detail: "Create. Inspire.",
    videoId: "MVX_raG2pxo",
    genre_style_mood:
      "ORCHESTRAL ELECTRONIC DOWNTEMPO CONTEMPORARY SCORE ANTHEM EMPOWERING EMOTIONAL",
    product: "AUTOMOBILE",
  },
  {
    title: "Siyaram's",
    detail: "Coming Home",
    videoId: "MdnFreJ3Zm8",
    genre_style_mood:
      "ORCHESTRAL CONTEMPORARY VOCAL JINGLE ANTHEM EMPOWERING EMOTIONAL",
    product: "FASHION",
  },
  {
    title: "Suzuki Gixxer",
    detail: "Moment of Silence",
    videoId: "Dg2aeEa1KwE",
    genre_style_mood:
      "ROCK ELECTRONIC CONTEMPORARY SCORE UPBEAT COOL EMPOWERING",
    product: "AUTOMOBILE",
  },
  {
    title: "Taj Hotels",
    detail: "Tajness",
    videoId: "MSBp3VNzhI8",
    genre_style_mood:
      "ORCHESTRAL CONTEMPORARY SCORE VOCAL ANTHEM EMPOWERING EMOTIONAL UPBEAT",
    product: "LIFESTYLE",
  },
  {
    title: "Urban Ladder",
    detail: "The Itch",
    videoId: "r44p01WWfyw",
    genre_style_mood:
      "ORCHESTRAL ELECTRONIC CONTEMPORARY SCORE EMPOWERING COOL EMOTIONAL",
    product: "LIFESTYLE",
  },
  {
    title: "White Hat Jr.",
    detail: "Coding Seekho, Duniya Badlo!",
    videoId: "fyl22SaDAnI",
    genre_style_mood:
      "ELECTRONIC POP CONTEMPORARY VOCAL ANTHEM UPBEAT COOL KIDS",
    product: "LIFESTYLE",
  },
  {
    title: "Disney",
    detail: "Imagine That",
    videoId: "SfAPDPEYIdU",
    genre_style_mood: "POP CONTEMPORARY VOCAL ANTHEM UPBEAT QUIRKY KIDS",
    product: "LIFESTYLE",
  },
];

function splitCategoryBySpace(genre_style_mood) {
  let str = genre_style_mood;
  var res = str.toLowerCase();
  let substr = res.split(" ");
  let liDiv = "";
  substr.forEach((str1) => {
    liDiv = liDiv + `<li class="${str1}_category"><a>${str1}</a></li>`;
  });
  return liDiv;
}

var topbtnimg;

function initializeGridData() {
  var videosDiv = "";
  videosData.forEach((video) => {
    let imgTag = "";
    if (video.thumbnailImg) {
      imgTag = `<img id="${video.videoId}" class="thumbnail-img" width="100%" height="200" src="https://img.youtube.com/vi/${video.videoId}/default.jpg"/>`;
    } else {
      imgTag = `<img id="${video.videoId}" class="thumbnail-img" width="100%" height="200" src="https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg"/>`;
    }
    videosDiv =
      videosDiv +
      `<div class="col-sm-12 col-md-6 col-lg-4 thumbnail element-item ${video.product.toLowerCase()} ${video.genre_style_mood.toLowerCase()}">
        <div class="thumbnail-header">
          <p class="thumbnail-title">${
            video.title
          }</p><p class="thumbnail-detail">${video.detail}</p>
        </div><div>${imgTag}</div>
        <div class="thumbnail-body"><p class="thumbnail-name"><a class="${video.product.toLowerCase()}_category" href="#">${
        video.product
      }</a></p><ul class="thumnail-content">${splitCategoryBySpace(
        video.genre_style_mood
      )}</ul></div></div>`;
  });
  document.getElementById("isotopegrid").innerHTML = videosDiv;
  initIsotope();

  topbtnimg = document.getElementById("myBtn");
  // When the user scrolls down 30px from the top of the document, show the button
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (topbtnimg && 
    (document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300)
  ) {
    topbtnimg.style.display = "block";
  } else {
    topbtnimg.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

setTimeout(initializeGridData, 1);

// init Isotope
function initIsotope() {
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
    $grid.isotope({ filter: ".fashion" });
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
}
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
