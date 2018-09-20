/**
 * The type of menu to be changed to
 * @param {String} menu brunch, regular or cocktail.
 */
function showMenu(menu) {
  var src = '';
  if (menu === 'brunch') {
    src = 'file:///Users/abisoyeoke-lawal/Documents/Personal/Safi/assets/pdfs/brunch.pdf';
  } else if (menu === 'regular') {
    src = 'file:///Users/abisoyeoke-lawal/Documents/Personal/Safi/assets/pdfs/main.pdf';
  }

  var holder = document.getElementById('menu-holder');
  var clone = holder.cloneNode(true);
  clone.setAttribute('src', src);
  holder.parentNode.replaceChild(clone, holder);
}