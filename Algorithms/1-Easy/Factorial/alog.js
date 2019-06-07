 // 5! = 5x4x3x2x1 = 120
 
function factorial(n) {
  let r = n;
  for (let i = n-1; i > 1; i--) {
    r *= i;
  } 
  return r;
}
