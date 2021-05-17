const concatStrings = (str1, separator) => {
	if (typeof str1 !== `string`) {
		return ``
	}
	if (typeof separator !== `string`) {
		separator = ``
	}

	let result = str1;

	return function addFunc(str2) {
		if (typeof str2 !== `string`) {
			return result
		}

		result += (separator + str2);
		return addFunc
	}
}


class Calculator {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		if (typeof this.x === 'bigint' || typeof this.y === 'bigint' ||
			typeof this.x !== "number" || typeof this.y !== "number" ||
			!isFinite(this.x) || !isFinite(this.y)
		) {
			throw new Error("Один из аргументов не валидный");
		}
	}

	validate(num) {
		return !num ||
			typeof num === 'bigint' ||
			!isFinite(num) ||
			typeof num !== 'number' ? false : true;
	}

	setX = (num) => {
		if (this.validate(num) === false) {
			throw new Error("Один из аргументов не валидный");
		} else {
			this.x = num;
			return this.x;
		}
	}

	setY = (num) => {
		if (this.validate(num) === false) {
			throw new Error("Один из аргументов не валидный");
		} else {
			this.y = num;
			return this.y;
		}
	}

	logSum = () => {
		console.log(this.x + this.y);
	}

	logMul = () => {
		console.log(this.x * this.y);
	}

	logSub = () => {
		console.log(this.x - this.y);
	}

	logDiv = () => {
		if (this.y === 0) {
			throw new Error("На 0 делить нельзя");
		} else {
			console.log(this.x / this.y);
		}
	}
}
