$(document).ready(function() {
	console.log("JavaScript ready!");
	$("#feuille").hide();
	$("#feuille").fadeIn(4000);
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