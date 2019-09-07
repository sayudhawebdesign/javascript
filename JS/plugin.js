// init Namespace
var MyNamespace = MyNamespace || {};

// module namespace
MyNamespace.UIComponents = function(customSetting) {
  // overwrite default settings
  var settings = $.extend({}, customSetting || {});

  // vars
  var self = this;

  // check tablet
  if ($(window).width() <= 1024) {
    // mobile view
    settings.tablet = true;
  }

  // check mobile
  if ($(window).width() <= 767) {
    // mobile view
    settings.mobile = true;
  }

  // PROTOTYPE
  // text limiter prototype
  $.fn.textLimiter = function(options) {
    // var
    var localvar = $.extend(
      {
        selector: this,
        textLength: 100,
      },
      options || {},
    );

    // text
    var txt = $(localvar.selector).text();
    txt = txt.trim();

    // limit text replace with '...'
    if (txt.length > localvar.textLength) {
      $(localvar.selector).text(txt.substring(0, options.textLength) + "...");
    }

    // chain
    return this;
  };

  this.init = function() {
    initMakeImageCover();

    initEmbedIframe();
  };

  var initEmbedIframe = function() {
    $(" .trythis ").tempIframe();

    $(" .sample-box ").tempIframe();

    $(" .customized-box ").tempIframe({
      playButton: false,
      alternateButton: ".playerTrigger",
    });
  };

  var initMakeImageCover = function() {
    // check
    if ($(".img-wrap").length !== 0) {
      $("img", ".img-wrap").each(function() {
        var img = this;
        $("<img/>")
          .attr("src", $(img).attr("src"))
          .waitForImages()
          .done(function() {
            if (this.width < this.height) {
              $(img).addClass("portrait");
            }
          });
      });
    }
  };
};
