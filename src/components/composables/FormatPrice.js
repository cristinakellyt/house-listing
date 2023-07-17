export default function useFormatPrice(price) {
  const housePrice = price.toString()
  let arrayPrice = [...housePrice]
  let count = 0
  let numberOfDigits = arrayPrice.length
  for (let i = numberOfDigits - 1; i >= 0; i--) {
    count++
    if (count % 3 === 0 && count < numberOfDigits) {
      arrayPrice.splice(i, 0, '.')
    }
  }
  return arrayPrice.join('')
}
