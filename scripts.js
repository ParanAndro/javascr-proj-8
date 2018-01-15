//scripts.js 
var buttonClass = document.getElementsByClassName("button");
var buttonElements = buttonClass.length;
var helloNumber = "";
for (var a = 0; a < buttonElements; a++) {
   helloNumber = buttonClass[a];
   alert(helloNumber.innerHTML);
}