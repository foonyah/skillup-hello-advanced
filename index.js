/***/
/* [hello-advanced] index.js */
$(function() {
  console.log('I\'m "index.js" for hello, world with some plugins.');
  $.resizeWrapper({
    '#main-container': {
      animate: {
        'margin-top': function() {
          var mc = $('#main-container');
          return parseInt($xj.layCenter($(window), mc).top) - mc.height() / 3;
        }
      },
      duration: 500
    }
  });
});
