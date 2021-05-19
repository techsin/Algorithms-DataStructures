/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let node1 = null;
    let counter = 1;
    let currNode = head;
    let kthParent = null;
    
    while(currNode) {
        if (counter === k) {
            node1 = currNode;
        }
        
        if (counter >= k) {
            if (kthParent === null ) {
                kthParent = head;
            } else {
                kthParent = kthParent.next;
            }
        }
        currNode = currNode.next;
        counter++;
    }
    
    let t = node1.val;
    node1.val = kthParent.val;
    kthParent.val = t;
    
    return head;
    
};
