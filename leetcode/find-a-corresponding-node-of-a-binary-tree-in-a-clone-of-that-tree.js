/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let seq = findAnode(original, target);

    if (seq.length == 0) {
        return cloned;
    }
    console.log(followSeq(cloned, seq));
    return followSeq(cloned, seq);

};

function findAnode(tree, target, seq=[]) {
    let right, left;
    
    if (tree === target) {
        return seq;
    }
    
    if(tree.left !== null) {
         left = findAnode(tree.left, target, [...seq, 'left']);
    }
    
    if (tree.right !== null) {
         right = findAnode(tree.right, target, [...seq, 'right']);
    }
    
    return right || left;
    
}

function followSeq(cloned, seq) {
    let n = cloned;

    seq.forEach(function(dir){
        n = n[dir];
    });
    
    return n;
}
