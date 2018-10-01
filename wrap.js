const wrap = (line, maxLen) => {
    let returnString = '';
    if (maxLen >= line.length) {
        return line;
    } else {
        for (let i=0; i < maxLen; i++) {
            returnString+=line[i];
        } returnString+= '\n';
        returnString+= line.slice(maxLen)
    }
    return returnString;
};
module.exports = wrap; 