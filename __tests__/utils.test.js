const { romanNumeralEncoder, romanNumeralDecoder } = require('../src/utils/formula');

describe('romanNumeralEncoder()', () => {
  test('should return I when given 1', () => {
    expect(romanNumeralEncoder(1)).toBe('I')
  })
  test('should return II when given 2', () => {
    expect(romanNumeralEncoder(2)).toBe('II')
  })
  test('should return IV when given 4', () => {
    expect(romanNumeralEncoder(4)).toBe('IV')
  })
  test('should return IX when given 9', () => {
    expect(romanNumeralEncoder(9)).toBe('IX')
  })
  test('should return X when given 10', () => {
    expect(romanNumeralEncoder(10)).toBe('X')
  })
  test('should return XVII when given 17', () => {
    expect(romanNumeralEncoder(17)).toBe('XVII')
  })
  test('should return LX when given 60', () => {
    expect(romanNumeralEncoder(60)).toBe('LX')
  })
  test('should return LXXV when given 75', () => {
    expect(romanNumeralEncoder(75)).toBe('LXXV')
  })
  test('should return XCI when given 91', () => {
    expect(romanNumeralEncoder(91)).toBe('XCI')
  })
  test('should return -X when given -10', () => {
    expect(romanNumeralEncoder(-10)).toBe('-X')
  })
  test('should return S when given 0.5', () => {
    expect(romanNumeralEncoder(0.5)).toBe('S')
  })
  test('should return • when given 1/12', () => {
    expect(romanNumeralEncoder(1/12)).toBe('•')
  })
  test('should return S• when given 0.584', () => {
    expect(romanNumeralEncoder(0.584)).toBe('S•')
  })
  test('should return IXS•• when given 9.668', () => {
    expect(romanNumeralEncoder(9.668)).toBe('IXS••')
  })
  test('should return N when given 0', () => {
    expect(romanNumeralEncoder(0)).toBe('N')
  })
})

describe('romanNumeralDecoder()', () => {
  test('should return 1 when given I', () => {
    expect(romanNumeralDecoder('I')).toBe(1)
  })
  test('should return 9 when given IX', () => {
    expect(romanNumeralDecoder('IX')).toBe(9)
  })
  test('should return 91 when given XCI', () => {
    expect(romanNumeralDecoder('XCI')).toBe(91)
  })
  test('should return the number when converted to roman numerals and back', () => {
    for(let i = 1; i <= 1000; i++){
      expect(romanNumeralDecoder(romanNumeralEncoder(i))).toBe(i)
    }
  })
  test('should return 0 when given N', () => {
    expect(romanNumeralDecoder('N')).toBe(0)
  })
  test('should return 0.5 when given S', () => {
    expect(romanNumeralDecoder('S')).toBe(0.5)
  })
  test('should return 1/12 when given •', () => {
    expect(romanNumeralDecoder('•')).toBe(0.0833)
  })
  test('should return 9.6667 when given IXS••', () => {
    expect(romanNumeralDecoder('IXS••')).toBe(9.6667)
  })
})