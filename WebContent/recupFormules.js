function getXMLHttpRequest() {
	if (window.XMLHttpRequest)
		return new XMLHttpRequest();
	if (window.ActiveXObject) {
		var xhr = new ActiveXObject("Msxml2.XMLHTTP");
		if (xhr != null)
			return xhr;
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function query(xhr, urlGetString) {
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var obj = eval("(" + xhr.responseText + ")");
			setInput(obj);
		}
	}
	xhr.open("GET", urlGetString, true);
	xhr.send();
}

var newId=0;
function setInput(obj) {
	var newFiche, newDivImg, newImg, newP1, newP2, newP3, newDivPrix;
	for(var i in obj){
		newId++;
		newFiche = "<div id='ficheId"+newId+"' data-url='destinations.html' class='fiche'>" +
					"<div>" +
						"<img src='Images/"+obj[i].image+"' style='background-repeat: none;'></img>" +
					"</div>" +
					"<p>"+obj[i].destination+"</p>" +
					"<p>"+obj[i].transport+"</p>" +
					"<p>"+obj[i].hebergement+"</p>" +
					"<div class='prix'>"+obj[i].prix+"€</div>" +
					"</div>" ;
		$(newFiche).appendTo($("#rang"));
		$("#ficheId"+newId).click(goToUrl)
	}
}

function goToUrl(event){
	window.location = ($(this).attr("data-url"));
}

$(document).ready(function(){
	var xhr = getXMLHttpRequest();
	var url = "formules.json";
	query(xhr, url);
});