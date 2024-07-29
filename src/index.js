module.exports = function toReadable(num) {
    const digits = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    if (num === 0) {
        return "zero";
    }
    if (num < 10) {
        return digits[num - 1];
    } else if (num < 20) {
        let particle = "teen";
        let rem = num % 10; // remainder when divided by 10
        switch (num) {
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 15:
                return "fifteen";
            case 18:
                return "eighteen";
            default:
                return digits[rem - 1] + particle;
        }
    } else if (num < 100) {
        let particle = "ty";
        let rem = num % 10; // remainder when divided by 10
        let intDiv = Math.floor(num / 10); // integer divisor when divided by 10
        let result = "";
        switch (intDiv) {
            case 2:
                result = "twenty";
                break;
            case 3:
                result = "thirty";
                break;
            case 4:
                result = "forty";
                break;
            case 5:
                result = "fifty";
                break;
            case 8:
                result = "eighty";
                break;
            default:
                result = digits[intDiv - 1] + particle;
        }
        if (rem === 0) {
            return result;
        } else {
            result += " " + toReadable(rem);
            return result;
        }
    }
    if (num < 1000) {
        let rem = num % 100; // remainder when divided by 10
        let intDiv = Math.floor(num / 100); // integer divisor when divided by 100
        let result = "";
        result += digits[intDiv - 1] + " hundred";
        if (rem === 0) {
            return result;
        } else {
            result += " " + toReadable(rem);
            return result;
        }
    }
};
