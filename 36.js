function newParagraph() {



//This create a heading
var elementH = document.createElement("h2");

var main = document.getElementById("main");

main.appendChild(elementH);

var textH = document.createTextNode("The Battle of salnish" );

elementH.appendChild(textH);

// this create a paragraph 
var element = document.createElement("p");
var main = document.getElementById("main");
main.appendChild(element);
var text = document.createTextNode("The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.");
element.appendChild(text);
var pAttribute = document.createAttribute("id");
pAttribute.value = "test";
element.setAttributeNode(pAttribute);



}

function removeHeader() {
 
var elementH = document.getElementsByTagName("h2")[2];
var parent = elementH.parentNode;
parent.removeChild(elementH);
 
var elementP = document.getElementsByTagName("p")[4];
parent.removeChild(elementP);
 
 
}