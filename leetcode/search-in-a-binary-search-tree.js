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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return parse(root, val);
};

function parse(node, val) {
    if (val === node.val) {
        return node;
    }
    
    if (val < node.val) {
        if (node.left) {
            return parse(node.left, val);
        } else {
            return null;
        }
    }
    
    if (val > node.val) {
        if (node.right) {
            return parse(node.right, val);
        } else {
            return null;
        }
    }
}
