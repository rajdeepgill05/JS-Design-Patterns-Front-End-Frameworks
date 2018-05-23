
var cats = document.querySelectorAll(".cat");
var buttons = document.querySelectorAll("button");

function hideAllCats(){
	for (var i=0; i<cats.length; i++){
		cats[i].style.display = "none"
	}
}

function bindButtonToCat(idNumber){
	document.querySelector("#button" + idNumber).addEventListener("click", () => {
		hideAllCats();
		document.querySelector("#cat" + idNumber).style.display = 'block'
	})
}

function bindCounterToCat(idNumber){
	var cat = "#cat"+idNumber
	document.querySelector(cat).addEventListener('click', () => {
		var count = document.querySelector(cat+" > .counter").textContent
		count = parseInt(count) + 1;
		document.querySelector(cat + " > .counter").textContent = count;
	})
}

for (var i=1; i<=buttons.length; i++){
	bindButtonToCat(i);
}

for (var i=1; i<=cats.length; i++){
	bindCounterToCat(i);
}

hideAllCats();
document.querySelector("#cat1").style.display = "block";