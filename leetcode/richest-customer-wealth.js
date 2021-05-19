/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let totalWeatlh = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        const banks = accounts[i];
        let sum = 0;
        for (let j = 0; j < banks.length; j++) {
            sum += banks[j];
        }
        
        totalWeatlh = Math.max(totalWeatlh, sum);
    }
    
    return totalWeatlh;
};
