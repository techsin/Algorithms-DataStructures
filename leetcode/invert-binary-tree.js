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
var invertTree = function(root) {
    const stack = [root];
    
    while(stack.length > 0) {
        const node = stack.pop();
        if (!node) break;
        const temp = node.right;
        node.right = node.left;
        node.left = temp;
        
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    
    return root;
    
};
