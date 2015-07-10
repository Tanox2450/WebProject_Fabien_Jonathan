$(document).ready(function() {
	console.log("JavaScript ready!");
	$("#feuille").hide();
	$("#feuille").fadeIn(1500);
	$("#identification").click(popUpIdentification);
	$(".menuBox").mouseover(addClass);
	$(".menuBox").mouseout(removeClass);
	$(".fiche").click(goToUrl);
	$(window).on('resize', placeIdBox);
	placeIdBox();
	$("#inscription").click(goToUrl);
	$("#formulaireConnexion").hide();
	$("#inscription").hide();
	$("#buttonNext").click(function() {
		slides(true);
	});
});

function popUpIdentification() {
	console.log("pop - up");
	$("#userName").focus();
	$("#formulaireConnexion").toggle("slow");
	$("#inscription").slideToggle("slow");
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
	var posFeuille = $("#feuille").offset().left;
	$("#identification").css("right", posFeuille);
	$("#formulaireConnexion").css("right",
			posFeuille + $("#identification").width());
	$("#inscription").css("right", posFeuille);
	$("#inscription").css("top", $("#identification").height());
}

function goToUrl(event) {
	window.location = ($(this).attr("data-url"));
//	console.log(($(this).attr("data-url")));
}

// =========================================
var nbImage = 3;
var count = 0;
var on = true;
var myVar = setInterval(function() {
	if (on) {
		slides()
	}
	on = true;
}, 3000);

function slides(i) {

	if (count >= nbImage) {
		count = 0;
	}
	count++;

//	console.log($("#divImg" + count).width());

//	console.log($("#divImg" + count).attr("z-index"));
	$("#divImg" + count).width("1300px");

//	console.log($("#divImg" + count).width());

	if (count == 1) {
		$("#divImg" + (nbImage).toString()).width("0%");
	} else {
		$("#divImg" + (count - 1).toString()).width("0%");
	}

	if (i) {
		on = false;
	}
}
