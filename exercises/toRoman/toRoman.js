/**
 * Given a positive integer, returns a string containing that integer's
 * Roman numeral representation.
 *
 * We recommend doing this work in two iterations: first supporting only
 * additive Roman numerals and then adding support for subtractive
 * Roman numerals. See the README for details.
 *
 * @example
 * toRoman(1);   // => 'I'
 * toRoman(6);   // => 'VI'
 * toRoman(152); // => 'CLII'
 *
 * @param {number} num - An integer
 * @returns {string} The input integer's Roman numeral representation
 */
function toRoman(num) {
  let ones = ["I","IV","V","VI","VII","VIII","IX","X"];
  let tens = ["X","L","C"];
  let hundereds = ["D","M"];
  let n = num.toString();
  let ROM = [];
  ROM = n.split("");
  console.log(ROM);

  console.log(ROM[ROM.length-1]);

  
  for(i = 0; i <= n; i++)
  { 

    while(ROM[ROM.length-1] === '1' || ROM[ROM.length-1] === '2' || ROM[ROM.length-1] === '3')
      {ROMAN_NUM += ones[0]}

    if(ROM[ROM.length-1] === '4')
      {ROMAN_NUM += ones[1]}
    if(ROM[ROM.length-1] === '5')
      {ROMAN_NUM += ones[2]}
    if(ROM[ROM.length-1] === '6')
      {ROMAN_NUM += ones[3]}
    if(ROM[ROM.length-1] === '7')
      {ROMAN_NUM += ones[4]}
    if(ROM[ROM.length-1] === '8')
      {ROMAN_NUM += ones[5]}
    if(ROM[ROM.length-1] === '9')
      {ROMAN_NUM += ones[6]}

    if(n.charAt(ROM[ROM.length-1]) === '0' && ROM[ROM.length-2] != undefined)
      {ROMAN_NUM += ones[7]}
  }
  
  return ROM;
}

if (require.main === module) {
  console.log('Running sanity checks for toRoman:');
  console.log(toRoman(420));
  //console.log(toRoman(4) === "IV");
}

module.exports = toRoman;
