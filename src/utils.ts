
export const rootClass = 'seven-segment-display'

export function formatSingleDigit(singleDigitNum: string | number): string {
  // format string to number
  if (typeof singleDigitNum === 'string') {
    singleDigitNum = parseInt(singleDigitNum, 10)
  }
  // check number
  if (typeof singleDigitNum === 'number') {
    if (singleDigitNum < 0 || singleDigitNum > 9) {
      singleDigitNum = 'NaN'
    } else if (singleDigitNum % 1 !== 0) {

      // 非整数
      singleDigitNum = Math.floor(singleDigitNum)
    }
    return singleDigitNum.toString()
  }
  return 'NaN'
}

export function formatNumbersToSingleDigitList(numbers: string | number | undefined) {
  if (typeof numbers === 'number') {
    numbers = numbers.toString()
  }
  if (typeof numbers === 'string') {
    numbers = numbers.replace(/[^\d]/g, '')
  } else {
    return ['NaN']
  }
  return numbers.split('')
}
