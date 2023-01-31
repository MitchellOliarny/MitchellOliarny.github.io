addEventListener("load", (event) => {
  let check = true;
  let name = document.getElementById("logoSpot");
  let nav = document.getElementById("nav");
  let land = document.getElementById("landing");
  let skill = document.getElementById("skills");
  let port = document.getElementById("projects");
  let cert = document.getElementById("certifications");



document.addEventListener('scroll', () => {
  if (window.scrollY >= 400) {
    if (check)
    {
        name.classList.remove("hidden");
        name.children[0].children[0].innerHTML = "Mitchell Oliarny";

        nav.classList.add("navScroll");

        for (let i = 1; i < nav.children.length; i++) {
          nav.children[i].classList.add("scrolled");
        }

        check = false;
    }
  }
  else {
    if (!check) {
      name.children[0].children[0].innerHTML = "";
      name.classList.add("hidden");

      nav.classList.remove("navScroll");

      for (let i = 1; i < nav.children.length; i++) {
        nav.children[i].classList.remove("scrolled");
      }

      check = true;
      
    }
    }

      if (isInViewport(land)) {
        name.children[0].classList.add("activeNAV");
        name.children[0].classList.remove("inactiveNAV");
      }
      else {
        name.children[0].classList.remove("activeNAV");
        name.children[0].classList.add("inactiveNAV");
        
      }
      if (isInViewport(skill)) {
        document.getElementById("skill").children[0].classList.add("activeNAV");
        document.getElementById("skill").children[0].classList.remove("inactiveNAV");
      }
      else {
        document.getElementById("skill").children[0].classList.remove("activeNAV");
        document.getElementById("skill").children[0].classList.add("inactiveNAV");
      }
      if (isInViewport(port)) {
        document.getElementById("port").children[0].classList.add("activeNAV");
        document.getElementById("port").children[0].classList.remove("inactiveNAV");
      }
      else {
        document.getElementById("port").children[0].classList.remove("activeNAV");
        document.getElementById("port").children[0].classList.add("inactiveNAV");
      }
      if (isInViewport(cert)) {
        document.getElementById("cert").children[0].classList.add("activeNAV");
        document.getElementById("cert").children[0].classList.remove("inactiveNAV");
      }
      else {
        document.getElementById("cert").children[0].classList.remove("activeNAV");
        document.getElementById("cert").children[0].classList.add("inactiveNAV");
      }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
    
  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= -500 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight + 500 || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};  


function wait(milliseconds, foo, arg){
  setTimeout(function () {
      foo(arg); 
  }, milliseconds);
}



});
