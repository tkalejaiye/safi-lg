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


  // Array of words/phrases to type out
var words = ["life is good", "things are in order", "clean heart"];

// Select html element to insert text into
var text = document.getElementById("about-title-inner");

var i = 0;
var next = 0;
var typingSpeed = 0;

// Function responsible for typing the text
function typeText() {
  // Loop through each phrase in array and type it out a letter at a time
  if (i < words[next].length) {
    text.innerHTML += words[next].charAt(i);
    i++;
    typingSpeed = 200 - Math.random()*100
    console.log(typingSpeed);
    setTimeout(typeText, typingSpeed);
  } else {
    // Once phrase has been printed, wait 2 seconds then erase text
      setTimeout(eraseText, 2000);
  }
}
// Function to erase text letter by letter
function eraseText() {
  // Go backwards and remove a letter from the text html element
  if (i > 0) {
    text.innerHTML = text.innerHTML.slice(0, -1);
    i--;
    setTimeout(eraseText, 75);
  } else {
    // Once phrase has been erased, iterate to the next one
    next++;
    // If all phrases have been written out, restart counter
    next === words.length ? next = 0 : null;
    setTimeout(typeText, 2000);
  }
}

typeText();


