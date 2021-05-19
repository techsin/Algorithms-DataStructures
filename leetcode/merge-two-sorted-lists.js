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
var mergeTwoLists = function(l1, l2) {
    
    let l3;
    let l3p;
    while (l1 || l2) {
        
        if (!l1) {
            l3 = l3 || l2;
            l3p ?  l3p.next = l2 : l3p = l2;
            break;
        }
        
        if (!l2) {
            l3 = l3 || l1;
            l3p ?  l3p.next = l1 : l3p = l1;
            break;
        }
        
        let t;
        if (l1.val <= l2.val) {
            t = l1;
            l1 = l1.next;
        } else {
            t = l2;
            l2 = l2.next;
        }
        
        if (!l3) {
            l3 = t;
            l3p = t;
        } else {
            l3p.next = t;
            l3p = t;
        }

    }
    
    return l3 || null;
    
};
