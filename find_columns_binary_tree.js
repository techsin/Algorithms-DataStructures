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
