var a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
];
var b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    n = ("000" + number).substr(-3).match(/^(\d{1})(\d{2})$/);
    var str = "";
    str +=
        n[1] != 0
            ? (a[Number(n[1])] || b[n[1]] + " " + a[n[1]]) + "hundred "
            : "";
    str += n[2] != 0 ? a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]] : "";
    return str.trim();
};
