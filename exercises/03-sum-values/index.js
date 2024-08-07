// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	const firstNumberValue = document.getElementById("firstNumber").value;
	const firstNumber = firstNumberValue === "" ? 0 : parseInt(firstNumberValue);

	const secondNumberValue = document.getElementById("secondNumber").value;
	const secondNumber = secondNumberValue === "" ? 0 : parseInt(secondNumberValue);

	const resultInput = document.getElementById("resultNumber");
	resultInput.value = firstNumber + secondNumber;
};
