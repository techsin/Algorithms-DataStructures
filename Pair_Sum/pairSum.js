//it takes array and return all combinations whose sum would be equal to parameter passed.

Array.prototype.pairSum = function(n){
  let pairs = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i; j < this.length; j++) {
      let a = this[i], b = this[j];
      if (a+b === n) {
          pairs.push([a,b]);
      }
    }
  }
  return pairs;
};




/*Results

numbers = [ 0, 3, 1, 4, 2 ]
numbers.pairSum(3)

#[
#     [ 0, 3 ],
#     [ 1, 2 ]
#]
*/
      
