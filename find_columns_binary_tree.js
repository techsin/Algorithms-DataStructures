// ===============================================================================================
// Prepration
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//... build binary tree
const btreeconfig = [70, 60, 76, 58, 63, 74, 80, null, 59, null, null, null, null, null, 88];
const root =  new BinaryTreeNode(btreeconfig[0]);
const stack = [root];
let stackPtr = 0;
let flag = "left";

for (let i = 1; i < btreeconfig.length; i++) {
    const val = btreeconfig[i];
    const node = new BinaryTreeNode(val);

    if (flag === "left") {
        if (val !== null) stack[stackPtr].left = node;
        flag = "right";
    } else {
        if (val !== null) stack[stackPtr].right = node;
        flag = "left";
        stackPtr++;
    }
    
    stack.push(node);
}

// ===============================================================================================
// ===============================================================================================

//Double Linked List
class DllNode {
    value = null;
    child = null;
    parent = null;

    constructor(val) {
        this.value = val;
    }

    insertChild(newChild) {
        const oldChild = this.child;
        this.child = newChild;
        newChild.parent = this;
        if (oldChild) {
            newChild.child = oldChild;
            oldChild.parent = newChild;
        }
    }

    insertParent(newParent) {
        const oldParent  = this.parent;
        this.parent = newParent;
        newParent.child = this;
        if (oldParent) {
            newParent.parent = oldParent;
            oldParent.child = newParent;
        }
    }
}

// THE Solution
function parser(node) {
    if (!node) return;
    let left, right;
    const dllNode = new DllNode(node.value);
    
    if (node.left) {
        left = parser(node.left);
        while(left.child) {
            left = left.child
        }
        dllNode.insertParent(left);
    }
    
    if (node.right) {
        right = parser(node.right);
        while(right.parent) {
            right = right.parent
        }
        dllNode.insertChild(right);
    }
    
    return dllNode;

}

let d = parser(root);
while (d.parent) d = d.parent;
while (d) {
    console.log(d.value);
    d = d.child;
}

