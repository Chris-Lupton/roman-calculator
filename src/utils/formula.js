export const calculate = (calculation) => {
  let sum = ''
  let decimalValue
  let romvanValue
  if(/[+|\-|*|/]\w+/.test(calculation)){
    sum = calculation.replaceAll(/[\w|•]+/g, romanNumeralDecoder)
    decimalValue = +returnValue(sum).toFixed(4)
    romvanValue = romanNumeralEncoder(decimalValue)
  } else {
    decimalValue = romanNumeralDecoder(calculation)
    romvanValue = calculation
  }
  return { sum, decimalValue, romvanValue}
}

const returnValue = (sum) => {
  const symbol = sum.match(/[+|\-|*|/]/)[0]
  const nums = sum.split(symbol)

  switch (symbol) {
    case '+': 
      return +nums[0] + +nums[1]
    case '-' :
      return +nums[0] - +nums[1]
    case '*' :
      return +nums[0] * +nums[1]
    case '/' :
      return +nums[0] / +nums[1]
  }
}

export const romanNumeralEncoder = (num) => {
    if(num === 0) return 'N'
    let isNegative = num < 0
    if (isNegative) num = +String(num).slice(1)
    const numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1,S:0.5,'•':(1/12)}
    let result = ''
   
     for (let key in numerals) {
       while ( num >= numerals[key]) {
         result += key
         num -= numerals[key]
       }
     }
     return isNegative ? '-' + result : result
}

export const romanNumeralDecoder = (str) => {
  const n = {N: 0, S:0.5, '•':(1/12), I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
  let numbers = str.split('').map(x => n[x])
  let count = 0 

  for (let i=0; i < numbers.length; i++){
    if (numbers[i] >= numbers[i+1])count += numbers[i]
    if (numbers[i] < numbers[i+1])count -= numbers[i]
    if (i === numbers.length -1)count += numbers[i]
  }

  return +count.toFixed(4)
}