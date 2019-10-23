"use strict";


let $content;
let $footer;
let $offsetHeight;
let $footerHeight;

$(document).ready(function() {

  $content = $('.main-wrapper');
  $footer = $('.main-foot');

  setFooterHeight();

});

$(window).resize(()=> {
  setFooterHeight();
});

function setFooterHeight() {

  if ($content.height() < $(window).height()) {
    $footerHeight = $footer.height();
    $offsetHeight = $footerHeight + $(window).height() - $content.height();
    $footer.css('height', $offsetHeight + 'px');
  }
  else if ($content.height() >= $(window).height()) {
    $footer.css('height', 'auto');
  }

}
