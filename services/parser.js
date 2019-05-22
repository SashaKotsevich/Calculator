parse = str => {
	let unaryMinus = new RegExp(/^-[0-9]+\.[0-9]*(?=\D)|^-[0-9]+(?=$|\D)/);
	let num = new RegExp(/^[0-9]+\.[0-9]*(?=$|\D)|^[0-9]+(?=$|\D)/);
	let sign = new RegExp(/[\+\-\*\^\(\)\√\%\/]/);
	let result = [];
	for (let i = 0; str.length != 0 && i < 1000; i++) {
		if (
			str.match(unaryMinus) &&
			typeof result[result.length - 1] !== "number" &&
			result[result.length - 1] !== ")"
		) {
			result.push(+str.match(unaryMinus)[0].trim());
			str = str.replace(unaryMinus, "").trim();
		} else if (str.match(num)) {
			result.push(+str.match(num)[0].trim());
			str = str.replace(num, "").trim();
		} else if (str.match(sign)) {
			result.push(str.match(sign)[0].trim());
			str = str.replace(sign, "").trim();
		}
	}
	return calculate(result);
};

calculate = expression => {
	let start = true;
	let operatorStack = [];
	let operandStack = [];
	const brackets = ["(", ")"];
	const operatorsPriority = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3, "√": 4 };

	for (let i = 0; i < expression.length; i++) {
		console.log(expression[i]);
		if (typeof expression[i] === "number") {
			operandStack.push(expression[i]);
		} else if (brackets.indexOf(expression[i]) !== -1) {
			if (expression[i] === "(") operatorStack.push(expression[i]);
			else {
				if (operatorStack[operatorStack.length - 1] !== "(") {
					const flag = operatorStack[operatorStack.length - 1] !== "√";
					operandStack.push(
						calc(
							operatorStack.pop(),
							operandStack.pop(),
							flag ? operandStack.pop() : undefined
						)
					);
					i--;
				} else {
					operatorStack.pop();
				}
			}
		} else if (operatorsPriority[expression[i]]) {
			if (
				!operatorStack.length ||
				operatorStack[operatorStack.length - 1] === "(" ||
				operatorsPriority[operatorStack[operatorStack.length - 1]] <
					operatorsPriority[expression[i]]
			) {
				operatorStack.push(expression[i]);
			} else if (
				operatorsPriority[operatorStack[operatorStack.length - 1]] >=
				operatorsPriority[expression[i]]
			) {
				const flag = operatorStack[operatorStack.length - 1] !== "√";
				operandStack.push(
					calc(
						operatorStack.pop(),
						operandStack.pop(),
						flag ? operandStack.pop() : undefined
					)
				);
				i--;
			}
		}
		if (i === expression.length - 1 && operatorStack.length) {
			while (operatorStack.length) {
				const flag = operatorStack[operatorStack.length - 1] !== "√";
				operandStack.push(
					calc(
						operatorStack.pop(),
						operandStack.pop(),
						flag ? operandStack.pop() : undefined
					)
				);
			}
		}
	}
	return operandStack[0];
};

const calc = (operator, operand2, operand1) => {
	console.log("CALC", operand1, operator, operand2);
	switch (operator) {
		case "+":
			return operand1 + operand2;
		case "-":
			return operand1 - operand2;
		case "/":
			return operand1 / operand2;
		case "*":
			return operand1 * operand2;
		case "^":
			return Math.pow(operand1, operand2);
		case "√":
			if (operand2 < 0) throw new Error("radicand cannot be less than zero");
			return Math.pow(operand2, 1 / 2);
		default:
			console.log(operator);
			throw new Error("Unknown operator");
	}
};

module.exports = {
	parse,
};
