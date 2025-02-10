"use strict";
//FUNCTION P/ REDUCAO DE TELA APARECER O HAMBURGUER
function photoReplacement() {
  smile.style.display = "none";
  biggerSmile.style.display = "inline";
}
function photoReplacement2() {
  smile.style.display = "inline";
  biggerSmile.style.display = "none";
}

function changedSize() {
  if (window.innerWidth >= 768) {
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

//PARA TROCA DINAMICA DO ITEM SELECIONADO

function showItem(id) {
  if (id === "SoftSkills") {
    //ELE APARECE
    showSoftSkills.style.display = "block";
    //OUTROS SOMEM
    showHtml.style.display = "none";
    showCss.style.display = "none";
    showJavascript.style.display = "none";
    showGit.style.display = " none ";
  } else if (id === "html") {
    //ELE APARECE
    showHtml.style.display = " block ";
    //OUTROS SOMEM
    showSoftSkills.style.display = "none";
    showCss.style.display = "none";
    showJavascript.style.display = "none";
    showGit.style.display = " none ";
  } else if (id === "css") {
    //ELE APARECE
    showCss.style.display = " block ";
    //OUTROS SOMEM
    showHtml.style.display = "none";
    showSoftSkills.style.display = "none";
    showJavascript.style.display = "none";
    showGit.style.display = " none ";
  } else if (id === "javaScript") {
    //ELE APARECE
    showJavascript.style.display = "block";
    //OUTROS SOMEM
    showCss.style.display = "none";
    showHtml.style.display = "none";
    showSoftSkills.style.display = "none";
    showGit.style.display = " none ";
  } else if (id === "git") {
    //ELE APARECE
    showGit.style.display = "block";
    //OUTROS SOMEM
    showCss.style.display = "none";
    showHtml.style.display = "none";
    showSoftSkills.style.display = "none";
    showJavascript.style.display = "none";
  }
}

/* showGit.style.display = " none ";
 showCss.style.display = "none";
 showHtml.style.display = "none";
 showSoftSkills.style.display = "none";
 showJavascript.style.display = "none";*/
