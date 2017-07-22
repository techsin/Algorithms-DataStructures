//find the phone number whose digits sum to the largest number.

function largest_phone_number(arr) {
  let g_sum = 0;
  let index = null;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let sum = 0; 
    item.match(/\d/gi).forEach(function(n){
      sum +=n;
    });
    if (sum > g_sum) {
      index = i;
      g_sum = sum;
     }
  }
  return arr.reduce(function(a, b){
    let n1 = (a.match(/\d/gi) || []).reduce((t,n)=>Number(n)+t,0);
    let n2 = b.match(/\d/gi).reduce((t,n)=>Number(n)+t,0);
    return (n1-n2 > 0) ? n1 : n2;
  },'')[0];
}



/*

Results

largest_phone_number(['123-456-7777', '963-481-7945', '111-222-3333'])
#=> '963-481-7945'

largest_phone_number(['555-555-5555','111-111-1111','(555)555-5456','222-121-2121'])
#=> '(555)555-5456'

largest_phone_number(['123-456-7899'])
#=> '123-456-7899'


*/
