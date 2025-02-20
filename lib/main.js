const {units, teens, tens, scales} = require("../constants/constant")

function convertChunk(chunk) {
    let words = [];
    if (chunk >= 100) {
        words.push(units[Math.floor(chunk / 100)]);
        words.push("hundred");
        chunk %= 100;
    }
    if (chunk >= 20) {
        words.push(tens[Math.floor(chunk / 10)]);
        chunk %= 10;
    } else if (chunk >= 10) {
        words.push(teens[chunk - 10]);
        chunk = 0;
    }
    if (chunk > 0 && chunk < 10) {
        words.push(units[chunk]);
    }
    return words.join(" ");
}

function numberToWords(num) {
    if (num === 0) return "zero";
    let words = [];
    let scaleIndex = 0;
    while (num > 0) {
        let chunk = num % 1000;
        if (chunk !== 0) {
            let chunkWords = convertChunk(chunk);
            if (scales[scaleIndex] !== "") {
                chunkWords += " " + scales[scaleIndex];
            }
            words.unshift(chunkWords);
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }
    
    return words.join(" ")
}

module.exports = numberToWords;