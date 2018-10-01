const wrap = (line, maxLen) => {
    let returnStr = '';

    const innerRec = function(line, maxLen) {
        if (line.length === 0) {
            return returnStr;
        }
        else {
            returnStr += line.slice(0, maxLen) + '\n'
            newline = line.slice(maxLen)
            return innerRec(newline, maxLen)
        }
    }
    innerRec(line, maxLen)
    return returnStr.slice(0, -1)
};
module.exports = wrap;
