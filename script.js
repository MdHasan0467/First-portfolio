   //------------Start Text Typing From Here
  var typed = new Typed(".auto-type", {
    strings: ["I'm a front end web developer","I'm a back end web developer", "I'm a web designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
    })
  //------------End Text Typing  Here


   //------------Start Menu Bar From Here

var navLinks = document.getElementById("navLinks");


  function showMenu() {
  navLinks.style.top = "0"; //beacause of we want to change the right value
  }

  function hideMenu() {
  navLinks.style.top = "-230px"; //beacause of we want to change the right value
}
  
//----------------End Menu Bar Here