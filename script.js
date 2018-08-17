let menuBtn = $('#menu-icon');
let hiddenMenu = $('#hidden-menu');
let exitBtn = $('#exit');
let body = $('body');

// menu button functionality
menuBtn.click(() => {
  hiddenMenu.css('top','0')
  body.css("overflow","hidden");
})

exitBtn.click(() => {
  hiddenMenu.css('top', '-100%');
  body.css("overflow","auto");
})
