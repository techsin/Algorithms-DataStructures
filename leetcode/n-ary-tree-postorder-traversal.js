/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let result = [];
    parse(root);
    function parse(node) {
        if (!node) return;
        node.children.forEach(parse);
        result.push(node.val);
    }
    
    return result;
};
