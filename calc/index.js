//let arr = [];
let val = "";
let result = 0;
let operand;
document.querySelector(".button-clicked").addEventListener("mousedown", e => {
	if (e.target.value === "clear") {
		val = "";
		result = 0;
		operand = null;
		document.querySelector(".display-numbers").innerText = "";
	} else if (e.target.value === "delete") {
		val = val.substring(0, val.length - 1);
		document.querySelector(".display-numbers").innerText = val;
	} else if (e.target.value === "divide") {
		result = result === 0 ? +val : (result /= val);
		val = "";
		operand = "divide";
		document.querySelector(".display-numbers").innerText = "";
	} else if (e.target.value === "multiply") {
		result = result === 0 ? +val : (result *= val);
		val = "";
		operand = "multiply";
		document.querySelector(".display-numbers").innerText = "";
	} else if (e.target.value === "subtract") {
		result += +val;
		val = "";
		operand = "subtract";
	} else if (e.target.value === "add") {
		result += +val;
		val = "";
		operand = "add";
	} else if (e.target.value === "equals") {
		let sum;
		switch (operand) {
			case "add":
				sum = result += +val;
				break;
			case "subtract":
				sum = result -= +val;
				console.log(result, +val);
				break;
			case "multiply":
				sum = result *= +val;
				break;
			case "divide":
				console.log(result);
				sum = result / +val;

				break;
		}
		document.querySelector(".display-numbers").innerText = sum;
	} else {
		val += e.target.value;
		document.querySelector(".display-numbers").innerText = val;
	}
	e.stopPropagation();
});
