AOS.init();

// NavBar Background Scroll //
window.onscroll = function() {scrollFunction()};
		 
	function scrollFunction() {
		if (document.documentElement.scrollTop > 100) {
				
		document.getElementById("header").style.background = "#ececec";
		} else {
			   
		document.getElementById("header").style.background = "none";
		}
}

