/** Calculating the average in a given array
 * @param {number []} 
 * @returns {number} 
 */

let arrayOfNumbers = [10,20,9,8,100]

const calculateAverageNumber = (arrayOfNumbers) => {
    
    let sum = 0
    
    for (let i = 0; i < arrayOfNumbers.length; i++) {

        sum += arrayOfNumbers[i]
   
    }

    const average = sum / arrayOfNumbers.length

    return average 

    }


const average = calculateAverageNumber (arrayOfNumbers)
console.log (average)
export { calculateAverageNumber };