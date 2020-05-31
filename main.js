/*
	Elevation by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $banner = $("#banner");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["841px", "980px"],
    small: ["737px", "840px"],
    xsmall: ["481px", "736px"],
    xxsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    alignment: "center",
  });

  // Nav Panel.

  // Button.
  $(
    '<div id="navButton">' +
      '<a href="#navPanel" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible",
    });

  // Header.
  // If the header is using "alt" styling and #banner is present, use scrollwatch
  // to revert it back to normal styling once the user scrolls past the banner.
  // Note: This is disabled on mobile devices.
  if (!browser.mobile && $header.hasClass("alt") && $banner.length > 0) {
    $window.on("load", function () {
      $banner.scrollex({
        bottom: $header.outerHeight() + 5,
        terminate: function () {
          $header.removeClass("alt");
        },
        enter: function () {
          $header.addClass("alt");
        },
        leave: function () {
          $header.removeClass("alt");
          $header.addClass("reveal");
        },
      });
    });
  }

  // Get the modal
  var ds = document.getElementById("ds");
  var algo = document.getElementById("algo");
  var java = document.getElementById("java");
  var ms = document.getElementById("ms");
  var frontend = document.getElementById("frontend");
  var openSource = document.getElementById("open-source");

  // Get the button that opens the modal
  var b_ds = document.getElementById("b_ds");
  var b_algo = document.getElementById("b_algo");
  var b_java = document.getElementById("b_java");
  var b_ms = document.getElementById("b_ms");
  var b_frontend = document.getElementById("b_frontend");
  var b_db = document.getElementById("b_db");
  var b_openSource = document.getElementById("b_open-source");

  // Get the <span> element that closes the modal
  var ds_close = document.getElementById("ds_close");
  var algo_close = document.getElementById("algo_close");
  var java_close = document.getElementById("java_close");
  var ms_close = document.getElementById("ms_close");
  var frontend_close = document.getElementById("frontend_close");
  var db_close = document.getElementById("db_close");
  var openSource_close = document.getElementById("open-source_close");

  // When the user clicks the button, open the modal
  b_ds.onclick = function () {
    ds.style.display = "block";
  };
  b_algo.onclick = function () {
    algo.style.display = "block";
  };
  b_java.onclick = function () {
    java.style.display = "block";
  };
  b_ms.onclick = function () {
    ms.style.display = "block";
  };
  b_frontend.onclick = function () {
    frontend.style.display = "block";
  };
  b_db.onclick = function () {
    db.style.display = "block";
  };
  b_openSource.onclick = function () {
    openSource.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  ds_close.onclick = function () {
    ds.style.display = "none";
  };
  algo_close.onclick = function () {
    algo.style.display = "none";
  };
  java_close.onclick = function () {
    java.style.display = "none";
  };
  ms_close.onclick = function () {
    ms.style.display = "none";
  };
  frontend_close.onclick = function () {
    frontend.style.display = "none";
  };
  db_close.onclick = function () {
    db.style.display = "none";
  };
  openSource_close.onclick = function () {
    openSource.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == ds) {
      ds.style.display = "none";
    }
    if (event.target == algo) {
      algo.style.display = "none";
    }
    if (event.target == java) {
      java.style.display = "none";
    }
    if (event.target == ms) {
      ms.style.display = "none";
    }
    if (event.target == frontend) {
      frontend.style.display = "none";
    }
    if (event.target == db) {
      db.style.display = "none";
    }
    if (event.target == openSource) {
      openSource.style.display = "none";
    }
  };
})(jQuery);
