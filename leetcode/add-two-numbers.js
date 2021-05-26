/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode();
    let pointer = l3;
    let sum;
    let carry = 0;
    
    while (l1 || l2) {
        l1_val = l1 ? l1.val : 0;
        l2_val = l2 ? l2.val : 0;
        sum = l1_val + l2_val + carry;
        new_val = sum % 10;
        carry = ~~(sum / 10);
        
        pointer.next = new ListNode(new_val)
        l1 = l1 && l1.next || null;
        l2 = l2 && l2.next || null;
        pointer = pointer.next;
    }
    
    while (carry > 0 ) {
        sum = carry;
        new_val = sum % 10;
        carry = ~~(sum / 10);
        pointer.next = new ListNode(new_val)
        pointer = pointer.next;
    }
    
    return l3.next;
};
