/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = [];
    parse(root);
    
    function parse(node) {
        if (!node) return;
        result.push(node.val);
        node.children.forEach(parse);
    }
    
    return result;
};
