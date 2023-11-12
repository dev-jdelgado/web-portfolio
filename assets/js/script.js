// NavBar Background Scroll //
window.onscroll = function() {scrollFunction()};
		 
	function scrollFunction() {
		if (document.documentElement.scrollTop > 250) {
				
		document.getElementById("header").style.background = "#000000c5";
		} else {
			   
		document.getElementById("header").style.background = "none";
		}
	}


// Typing Animation //
var typed = new Typed('.typing', {
  strings: ["Front-End Web Developer"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

