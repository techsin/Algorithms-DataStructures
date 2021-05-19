/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    return (s.substr(0, ~~(s.length/2)).match(/[aeiou]/ig)||[]).length === (s.substr(~~(s.length/2)).match(/[aeiou]/ig)||[]).length
};
