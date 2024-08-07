window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

const secondButton = document.getElementById("button2");
secondButton.addEventListener("click", myClickFunction);
