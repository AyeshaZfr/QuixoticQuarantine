var boxIndex = 0;
showBox();

function showBox() {
  var i;
  var box = document.getElementsByClassName("box");
  for (i = 0; i < box.length; i++) {
    box[i].style.display = "none";
  }
  boxIndex++;
  if (boxIndex > box.length - 3) {
    boxIndex = 1
  }
  for (var i = 0; i < 4; i++) {
    box[boxIndex + i - 1].style.display = "block";
  }
  setTimeout(showBox, 6000); // Change image every 3 seconds
}

// Next/previous controls
function navigate(n) {
  showBoxManual(boxIndex += n);
}


function showBoxManual(n) {
  var box = document.getElementsByClassName("box");
  for (i = 0; i < box.length; i++) {
    box[i].style.display = "none";
  }
  if (boxIndex < 0) {
    boxIndex = box.length - 1;
  }
  for (var i = 0; i < 4; i++) {
    var j = (boxIndex + i - 1) % 8;
    if (j < 0) {
      j = (box.length + j - 1);
    }
    box[j].style.display = "block";
  }
}
