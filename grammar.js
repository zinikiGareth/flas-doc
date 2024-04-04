// how to find a node with the appropriate grammar-section using querySelector

function callonload() {
  hideAll();
  showJust("Files");
  showHashLocation();
  
  var hamdiv = document.getElementsByClassName("hamburger-div")[0];
  var lnks = document.getElementsByClassName("hamburger-section-link");
  for (var i=0;i<lnks.length;i++) {
    lnks[i].addEventListener('click', clickOnLink(hamdiv));
  }
  
  hamdiv.addEventListener('click', toggleHamburgerEvent(hamdiv));
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
    if (coll[i].dataset.grammarSection.toLowerCase() == name.toLowerCase())
      coll[i].classList.remove("hidden");
  }
}

function clickOnLink(hamdiv) {
  return function(ev) {
    var div = ev.target;
    hideAll();
    showJust(div.dataset.grammarSection);
    toggleHamburger(hamdiv);
    history.pushState({}, div.dataset.grammarSection, '#' + div.dataset.grammarSection);
  }
}

function toggleHamburgerEvent(hamdiv) {
  return function(ev) {
    toggleHamburger(hamdiv);
  }
}
function toggleHamburger(hamdiv) {
  var gc = document.getElementsByClassName("grammar-content");
  var hm = document.getElementsByClassName("hamburger-menu");
  if (hamdiv.classList.contains("menu-open")) {
    hamdiv.classList.remove("menu-open");
    for (var i=0;i<gc.length;i++) {
      gc[i].classList.remove("menu-open");
    }
    for (var i=0;i<hm.length;i++) {
      hm[i].classList.remove("menu-open");
    }
  } else {
    hamdiv.classList.add("menu-open");
    for (var i=0;i<gc.length;i++) {
      gc[i].classList.add("menu-open");
    }
    for (var i=0;i<hm.length;i++) {
      hm[i].classList.add("menu-open");
    }
  }
}

function showHashLocation() {
  hideAll();
  if (window.location.hash) {
    var show = window.location.hash;
    while (show.charAt(0) == '#' || show.charAt(0) == '/') {
      show = show.substring(1);
    }
    showJust(show);
  }
}

window.addEventListener('load', callonload);
window.addEventListener('popstate', showHashLocation);
