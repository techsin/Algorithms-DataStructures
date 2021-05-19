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
var lcaDeepestLeaves = function(root) {
    let max = -1;
    let map = new Map();
    let ancestor = null;
    
    mark(root, 0);
    
    if (map.size === 1) {
        return map.entries().next().value[0];
    }
    
    let sz = map.size;
    LCA(root);
    
    function mark(node, level) {
        if (level > max) {
            map = new Map();
            map.set(node, true);
            max = level;
        } else if (level === max) {
            map.set(node, true);
        }
        
        node.right && mark(node.right, level + 1);
        node.left && mark(node.left, level + 1);
    }
    
    
    function LCA(node) {
        if (ancestor) return;
        
        let l = node.left && LCA(node.left);
        let r = node.right && LCA(node.right);
        
        if (l && r) {
            if (sz>2) {
                sz--;
                return true;
            } else {
                ancestor = node;
                return;
            }
        } else if (l || r) {
            return true;
        }

        return !!map.get(node);
    }
    
    return ancestor;
};

