/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let str = (num+'');
    let i = str.indexOf('6');
    return i>-1 ? parseInt(str.substring(0, i) + '9' + str.substring(i + 1)) : num;
};
