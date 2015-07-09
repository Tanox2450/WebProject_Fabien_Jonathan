$(document).ready(function() {
	console.log("JavaScript ready!");
	$("#feuille").hide();
	$("#feuille").fadeIn(2000);
	$("#identification").click(popUpIdentification);
	$(".menuBox").mouseover(addClass);
	$(".menuBox").mouseout(removeClass);
	$(".fiche").click(goToUrl);
	$(window).on('resize', placeIdBox);
	placeIdBox();
	$("#formulaireConnexion").hide();

});

function popUpIdentification() {
	console.log("pop - up");
	$("#userName").focus();
	$("#formulaireConnexion").toggle("slow");
}

function addClass() {
	// console.log("addClass");
	$(this).addClass("menuBoxMouseHover");
}

function removeClass() {
	// console.log("removeClass");
	$(this).removeClass("menuBoxMouseHover");
}

function placeIdBox(event) {
	var posFeuille = $("#feuille").position().left;
	$("#identification").css("right", posFeuille);
	$("#formulaireConnexion").css("right",
			posFeuille + $("#identification").width());
}

function goToUrl(event){
	window.location = ($(this).attr("data-url"));
}



//=========================================


var on = true;
var myVar = setInterval(function(){ if(on) {slides()}on=true;},3000);

function slides(i) {
  document.getElementById("divImg2").style.width="0px";
  document.getElementById("divImg3").style.width="100%";
  var slide = document.getElementById("divImg1");
  document.getElementById("slide").appendChild(slide);
  if(i) {
   on = false; 
  }
}
function back_slide(i) {
  document.getElementById("divImg2").style.width="0px";
  document.getElementById("divImg1").style.width="100%";
  var slide = document.getElementById("divImg5");
  var slide2 = document.getElementById("divImg1");
  document.getElementById("slide").insertBefore(slide,slide2);
  if(i) {
   on = false; 
  }
}