var input = document.getElementById("input");
var submit = document.getElementById("submit");

function checkInput(){
  if (input.value == ""){
    submit.disabled = true;
  } else if (input.value !== ""){
    submit.disabled = false;
  }
}

function handleKeyPress(e){
  if (e.keyCode === 13){
    submit.click();
    input.value = "";
    return false;
  }
}

submit.addEventListener("click", function(){
  var coggWord = document.getElementById("cogg-word");
  coggWord.textContent = input.value;
  input.value = "";
});

input.onkeypress = handleKeyPress;

setInterval(checkInput, 1);