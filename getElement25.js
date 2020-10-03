function changeStyle(){


var paragraph = document.getElementsByTagName("p");


// 28 class
for(var i=0; i< paragraph.length; i++){
 paragraph[i].style.fontStyle = "italic";
 paragraph[i].style.backgroundColor = "#2ce65d";
 paragraph[i].style.color = "blue";


}
/*
var changeParaText = paragraph[0].style.fontStyle = "italic";

var changeParaText = paragraph[1].style.fontStyle = "italic";

var changeParaText = paragraph[1].style.backgroundColor = "red";

var changeParaText = paragraph[2].style.fontStyle = "italic";

var changeParaText = paragraph[3].style.fontStyle = "italic";

var changeParaText = paragraph[3].style.color = "blue";

*/
}

function changeStyle2(){

	var paragraph2 = document.getElementsByClassName("para");

	var changeText = paragraph2[0].style.color ="red";

	var changeText = paragraph2[2].style.color="black";
}