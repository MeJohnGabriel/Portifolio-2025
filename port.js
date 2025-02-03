"use strict";

function photoReplacement() {
  smile.style.display = "none";
  biggerSmile.style.display = "inline";
}
function photoReplacement2() {
  smile.style.display = "inline";
  biggerSmile.style.display = "none";
}

function changedSize() {
  if (window.innerWidth >= 890) {
    console.log("A tela e maior que 890px ");
    itens.style.display = "flex";
  } else {
    itens.style.display = "none";
  }
}

function clickedMenu() {
  if (itens.style.display == "flex") {
    itens.style.display = "none";
  } else {
    itens.style.display = "flex";
  }
}
