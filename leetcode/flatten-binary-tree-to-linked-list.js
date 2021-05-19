/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    parse(root);
};

function parse(node) {
    let lnre; //left node's right edge
    let edge;
    if (!node) return;
    if (node.left) lnre = parse(node.left); 
    if (node.right) parse(node.right);
    
    lnre = lnre || node;
    const oldright = node.right;
    node.right = node.left;
    node.left = null;
    lnre.right = oldright;

    return rightEdge(node);
    
}

function rightEdge(n) {
    let node = n;
    while (node.right) {
        node = node.right;
    }
    return node;
}
