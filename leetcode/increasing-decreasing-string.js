function sortString(s) {
  let data = s.split('').sort((a, b) => a < b ? -1 : 1).map(x => { return { val: x, used: false } }),
    output = [],
    prevChar = null,
    charsLeft = data.length;

  while (charsLeft) {
    prevChar = null;
    for (let i = 0; i < data.length; i++) logic(i);
    prevChar = null;
    for (let i = data.length - 1; i > -1; i--) logic(i);

  }

  function logic(i) {
    let char = data[i].val;
    if ((prevChar == null || prevChar !== char) && data[i].used === false) {
      prevChar = char;
      output.push(char);
      data[i].used = true;
      charsLeft--;
    }
  }
  
  return output.join('')
}
