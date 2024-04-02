// Two things to sort out:
// how to make this load itself
// how to find a node with the appropriate grammar-section using querySelector

function callonload() {
  hideAll();
  showJust("Files");
  
  var lnks = document.getElementsByClassName("hamburger-section-link");
  for (var i=0;i<lnks.length;i++) {
    lnks[i].addEventListener('click', clickOnLink());
  }
  
  var hamdiv = document.getElementsByClassName("hamburger-div");
  for (var i=0;i<hamdiv.length;i++) {
    hamdiv[i].addEventListener('click', toggleHamburger());
  }
}

function hideAll() {
  var coll = document.getElementsByClassName("grammar-section");
  for (var i=0;i<coll.length;i++) {
    coll[i].classList.add("hidden");
  }
}

function showJust(name) {
  // should be able to use a query selector in place of this :-(
  var coll = document.getElementsByClassName("grammar-section");
  for (var i=0;i<coll.length;i++) {
    if (coll[i].dataset.grammarSection == name)
      coll[i].classList.remove("hidden");
  }
}

function clickOnLink() {
  return function(ev) {
    var div = ev.target;
    hideAll();
    showJust(div.dataset.grammarSection);
  }
}

function toggleHamburger() {
  return function(ev) {
    var gc = document.getElementsByClassName("grammar-content");
    var hm = document.getElementsByClassName("hamburger-menu");
    if (ev.target.classList.contains("menu-open")) {
      ev.target.classList.remove("menu-open");
      for (var i=0;i<gc.length;i++) {
        gc[i].classList.remove("menu-open");
      }
      for (var i=0;i<hm.length;i++) {
        hm[i].classList.remove("menu-open");
      }
    } else {
      ev.target.classList.add("menu-open");
      for (var i=0;i<gc.length;i++) {
        gc[i].classList.add("menu-open");
      }
      for (var i=0;i<hm.length;i++) {
        hm[i].classList.add("menu-open");
      }
    }
  }
}

// something here should work
// document.onload = callonload;
// document.addEventListener('onpageload', onload)
// window.load = callonload;
window.addEventListener('load', callonload);
