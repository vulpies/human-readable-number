module.exports = function toReadable(num) {
	let str = ""

	const ones = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen"
	}

	const dozens = {
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety",
	}

	const getHundreds = Number(String(num)[0])
	const getDozens_1 = `${Number(String(num)[0])}0`
	const getDozens_2 = `${Number(String(num)[1])}0`
	const getDozens_3 = Number(String(num)[1])
	const getOnes = Number(String(num)[2])
	const getTwoNumbers = `${Number(String(num)[1])}${Number(String(num)[2])}`

	if (num < 20) {
		const str = ones[num]
		return str

	} else if (num >= 20 && num < 100) {
		const first = dozens[getDozens_1]
		const second = ones[getDozens_3]

		if (second === 'zero') {
			return str = `${first}`
		} else {
			return str = `${first} ${second}`
		}

	} else if (num >= 100 && num < 1000) {

		const first = `${ones[getHundreds]} hundred`
		const second = dozens[getDozens_2]
		const third = ones[getOnes]

		if (Number(String(num)[1]) === 0 && Number(String(num)[2]) === 0) {
			return str = first
		} else if (Number(String(num)[1]) === 0) {
			return str = `${first} ${third}`
		} else if (Number(String(num)[1]) !== 0 && getTwoNumbers < 20) {
			const dozens = ones[getTwoNumbers]
			return str = `${first} ${dozens}`
		} else if (Number(String(num)[2]) === 0) {
			return str = `${first} ${second}`
		} else {
			return str = `${first} ${second} ${third}`
		}
	}
}
