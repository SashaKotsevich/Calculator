Array.prototype.last = function() {
	return this[this.length - 1];
};

const evaluate = str => {
	return calculate(parse(str));
};

const parse = str => {
	let unaryMinus = new RegExp(/^-[0-9]+\.[0-9]*(?=\D)|^-[0-9]+(?=$|\D)/);
	let num = new RegExp(/^[0-9]+\.[0-9]*(?=$|\D)|^[0-9]+(?=$|\D)/);
	let sign = new RegExp(/[\+\-\*\^\(\)\√\%\/]/);
	let result = [];
	for (let i = 0; str.length != 0 && i < 1000; i++) {
		if (
			str.match(unaryMinus) &&
			typeof result.last() !== "number" &&
			result.last() !== ")"
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
	return result;
};

const calculate = expression => {
	let operatorStack = [];
	let operandStack = [];
	const brackets = ["(", ")"];
	const operatorsPriority = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3, "√": 4 };
	const description = [];

	const operatorCaller = position => {
		const flag = operatorStack.last() !== "√";
		const result = calcOperator(
			operatorStack.pop(),
			operandStack.pop(),
			flag ? operandStack.pop() : "",
			position
		);

		operandStack.push(result.value);
		description.push(result.description);
	};

	for (let i = 0, j = 1; i < expression.length; i++) {
		if (typeof expression[i] === "number") {
			operandStack.push(expression[i]);
		} else if (brackets.indexOf(expression[i]) !== -1) {
			if (expression[i] === "(") operatorStack.push(expression[i]);
			else {
				if (operatorStack.last() !== "(") {
					operatorCaller(j++);
					i--;
				} else {
					operatorStack.pop();
				}
			}
		} else if (operatorsPriority[expression[i]]) {
			if (
				!operatorStack.length ||
				operatorStack[operatorStack.length - 1] === "(" ||
				operatorsPriority[operatorStack.last()] <
					operatorsPriority[expression[i]]
			) {
				operatorStack.push(expression[i]);
			} else if (
				operatorsPriority[operatorStack.last()] >=
				operatorsPriority[expression[i]]
			) {
				operatorCaller(j++);
				i--;
			}
		}
		if (i === expression.length - 1 && operatorStack.length) {
			while (operatorStack.length) {
				operatorCaller(j++);
			}
		}
	}

	return { value: operandStack[0], description };
};

const calcOperator = (operator, operand2, operand1, position) => {
	let result = {
		description: `${position}=> ${operand1} ${operator} ${operand2}`,
	};

	switch (operator) {
		case "+":
			result.value = operand1 + operand2;
			break;
		case "-":
			result.value = operand1 - operand2;
			break;
		case "/":
			result.value = operand1 / operand2;
			break;
		case "*":
			result.value = operand1 * operand2;
			break;
		case "%":
			result.value = operand1 % operand2;
			break;
		case "^":
			result.value = Math.pow(operand1, operand2);
			break;
		case "√":
			if (operand2 < 0) throw new Error("Radicand cannot be less than zero");
			result.value = Math.pow(operand2, 1 / 2);
			break;
		default:
			throw new Error("Unknown operator");
	}
	return result;
};

const convert = ({ initialSys, targetSys, value }) => {
	const result = parseInt(value, initialSys).toString(targetSys);
	return { value: result, description: `${value}->${result}` };
};

module.exports = {
	evaluate,
	convert,
};
