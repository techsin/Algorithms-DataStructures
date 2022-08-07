class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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

console.log(root);
