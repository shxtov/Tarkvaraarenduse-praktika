
/*Materialized.css-i jaoks vajalik kood, et scroll efecti lisada*/
$(document).ready(function(){ $(".button-collapse").sideNav(); });
$(".button-collapse").sideNav();
$(document).ready(function(){
  $(".parallax").parallax();
});
 
//et kohe alguses ei oleks näha seda elementi
$("#showdiv").hide();
//scroll effect, mis näitab või peidab scroll noolt mobiili versioonis  
$(function () {
	$(window).scroll(function () {
		var scrollval = $(window).scrollTop();
		//kontrollin ekraani suurust, et triggeriks funktsiooni ainult mobiilsetel seadmetel
		if (screen.width < 500) {
			if (scrollval >= 160) {
				$("#showdiv").hide();
			} else {
				$("#showdiv").show();
			}
		} else {
			$("#showdiv").hide();
		}
	});
});

	  