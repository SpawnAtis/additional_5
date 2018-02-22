module.exports = function check(str, bracketsConfig) {

    let arrayFromStr = str.split('');
    let pairsOfBrackets = {};
    bracketsConfig.forEach((value) => { pairsOfBrackets[value[0]] = value[1]; });
    let stack = [];

    for (let i = 0; i < arrayFromStr.length; i++) {

        let k = pairsOfBrackets[arrayFromStr[i]];
        let x = pairsOfBrackets[stack[stack.length-1]];

        if((k === x) && (pairsOfBrackets[x] === x) && stack.length !== 0) { // fist and second checks will only true If open bracket == close Bracket
            stack.pop();
            continue;
        }

        if (arrayFromStr[i] in pairsOfBrackets) {
            stack.push(arrayFromStr[i]);
        }
        else {
            if (stack.length === 0 ||  pairsOfBrackets[stack.pop()] !== arrayFromStr[i])
                return false;
        }
    }

    return !stack.length;
};
