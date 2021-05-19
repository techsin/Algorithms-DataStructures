/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

function Node(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    this.root = null;
}

LinkedList.prototype.addAtIndex = function(index, val) {
    let counter = 1;
    let node = this.root;
    
    if (index === 0) {
        const temp = new Node(val);
        temp.next = this.root;
        this.root = temp;
        return;
    }
    
    while(node.next) {
        if (counter++ === index) break;
        node = node.next
    }
    
    const newNode = new Node(val);
    newNode.next = node.next;
    node.next = newNode;
};

LinkedList.prototype.print = function(){
    let node = this.root;
    while(node) {
        console.log(node.val);
        node = node.next;
    }
}

LinkedList.prototype.toArray = function(){
    let node = this.root;
    const arr = [];
    while(node) {
        arr.push(node.val);
        node = node.next;
    }
    
    return arr;
}

var createTargetArray = function(nums, index) {
    const ll = new LinkedList();
    
    for (let i = 0; i < nums.length; i++) {
        ll.addAtIndex(index[i], nums[i]);
    }
    
    return ll.toArray();
};
