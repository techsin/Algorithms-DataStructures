/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let prev = first;
    return [first, ...encoded.map(function(ele){
        let decoded = prev ^ ele;
        prev = decoded;
        return decoded;
    })];
};
