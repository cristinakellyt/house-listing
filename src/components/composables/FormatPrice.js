// Utility used to format a given price with a thousand separator.
export default function useFormatPrice(price) {
  const housePrice = price.toString()
  let arrayPrice = [...housePrice]

  // Normalizing and removing any existing decimal points ('.') from the 'arrayPrice'.
  arrayPrice = arrayPrice.filter((element) => element !== '.')

  // Initialize variables to track digits and count.
  let count = 0
  let numberOfDigits = arrayPrice.length
  for (let i = numberOfDigits - 1; i >= 0; i--) {
    count++

    // Check if the count is divisible by 3 and not equal to the total number of digits.
    // If true, it means we need to add a decimal point (thousand separator) to the 'arrayPrice'.
    if (count % 3 === 0 && count < numberOfDigits) {
      arrayPrice.splice(i, 0, '.')
    }
  }
  return arrayPrice.join('')
}
