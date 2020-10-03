function validateTextbox() {
 var box = document.getElementById("name");
 var box2 = document.getElementById("address");
// class 44
 
 //if (box.value == "" || box2.value == "" ) {
 //alert("The field marked in red cannot be blank");
if (box.value.length < 5 || box2.value.length < 5){
	alert("please enter at least 5 character");


 return false;
 }

 }