var elem = document.getElementById("loadingBarIn"); //loading bar
var width = 1;
var id = setInterval(frame, 10);
function frame() {
  if (width >= 90) {
    clearInterval(id);
  } else {
    width++;
    elem.style.width = width + '%';
  }
}
