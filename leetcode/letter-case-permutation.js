/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let stack1 = [], stack2 = [];

    push2cases(stack1, S[0]);
    
    for (let i = 1; i < S.length; i++) {
        for (let j = 0; j < stack1.length; j++) {
            push2cases(stack2, S[i], stack1[j]);
        }
        stack1 = stack2;
        stack2 = [];
    }
    return stack1;
};

function push2cases(arr, char, str = '') {
    arr.push( str + char.toLowerCase());
    if (isNaN(char)) {
        arr.push(str + char.toUpperCase());    
    }
}


// var letterCasePermutation = function(S) {
//     let stack1 = [];
//     let stack2 = [];

//     push2cases(stack1, S[0]);

    
//     for (let i = 1; i < S.length; i++) {
//         const char = S[i];

//         for (let j = 0; j < stack1.length; j++) {
//             let str = stack1[j];
//             push2cases(stack2, char, str);
//         }
        
//         stack1 = stack2;
//         stack2 = [];
//     }
    
//     return stack1;
// };
