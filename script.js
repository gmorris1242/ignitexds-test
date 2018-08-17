const menuBtn = $('#menu-icon');
const hiddenMenu = $('#hidden-menu');
const exitBtn = $('#exit');
const body = $('body');

// menu button functionality
menuBtn.click(() => {
  hiddenMenu.css('top','0')
  body.css("overflow","hidden");
})

exitBtn.click(() => {
  hiddenMenu.css('top', '-100%');
  body.css("overflow","auto");
})
