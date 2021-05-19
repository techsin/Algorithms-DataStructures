/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let newArr = [];
    for (let i = 0; i < prices.length - 1; i++) {
        let price = prices[i];
        let discount = 0;
        let j = i+1;
        while (prices[j] > price) {
            j++;
            if (j === prices.length) break;
        }
        if (j < prices.length) {
            discount = prices[j];
        } else {
            discount = 0;
        }

        let discountedprice = price - discount;
        newArr.push(discountedprice);
    }
    
    newArr.push(prices[prices.length -1]);
    return newArr;
};final-prices-with-a-special-discount-in-a-shop/
