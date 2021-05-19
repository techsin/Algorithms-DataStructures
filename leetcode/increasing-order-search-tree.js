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
 * @return {TreeNode}
 */
var increasingBST = function(iroot) {
    let root = null;
    let pointer = null;
    
    parse(iroot);
    
    // in order traversal dfs
    function parse(node) {
        if (!node) return;
        
        parse(node.left);
        
        if (root === null) root = node;
        if (pointer === null) {
            pointer = node;
        } else {
            node.left = null;
            pointer.right = node;
            pointer = node;
        }
        
        parse(node.right);
    }
    
    return root;
};
