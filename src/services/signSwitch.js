export default function switchSign(expression) {
	const startNegativeNum = new RegExp(
		/^-[0-9]+\.[0-9]*$|^-[0-9]*$|\(-[0-9]+\.[0-9]*$|\(-[0-9]+$/
	);
	const startPositiveNum = new RegExp(
		/^[0-9]+\.[0-9]*$|^[0-9]*$|\([0-9]+\.[0-9]*$|\([0-9]+$/
	);
	const negativeNumWithBrackets = new RegExp(
		/\(-[0-9]+\.[0-9]*\)$|\(-[0-9]+$\)/
	);
	const positiveNumWithPlus = new RegExp(/\+[0-9]+\.[0-9]*$|\+[0-9]+$/);
	const negativeNum = new RegExp(/-[0-9]+\.[0-9]*$|-[0-9]+$/);
	const positiveNum = new RegExp(/[0-9]+\.[0-9]*$|[0-9]+$/);
	if (expression.length > 0) {
		if (expression.match(startNegativeNum)) {
			expression = expression.replace(
				startNegativeNum,
				+expression.match(startNegativeNum)[0] * -1
			);
			console.log(1);
		} else if (expression.match(startPositiveNum)) {
			expression = expression.replace(
				startPositiveNum,
				+expression.match(startPositiveNum)[0] * -1
			);
			console.log(2);
		} else if (expression.match(negativeNumWithBrackets)) {
			expression = expression.replace(
				negativeNumWithBrackets,
				+expression.match(negativeNumWithBrackets)[0].slice(1, -1) * -1
			);
			console.log(3);
		} else if (expression.match(positiveNumWithPlus)) {
			expression = expression.replace(
				positiveNumWithPlus,
				+expression.match(positiveNumWithPlus)[0] * -1
			);
			console.log(4);
		} else if (expression.match(negativeNum)) {
			expression = expression.replace(
				negativeNum,
				"+" + +expression.match(negativeNum)[0] * -1
			);
			console.log(5);
		} else if (expression.match(positiveNum)) {
			expression = expression.replace(
				positiveNum,
				`(${+expression.match(positiveNum)[0] * -1})`
			);
			console.log(6);
		}
	}
	return expression;
}
