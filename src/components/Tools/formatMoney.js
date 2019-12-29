export const formatMoney = number => {
    let stringNumber = String(number)
    let stringNumberArr = stringNumber.split('')
    let stringNumberArrReversed = stringNumberArr.reverse()
    let result = ""
    stringNumberArrReversed.forEach(function(item, index){
        result += item
        if ((index + 1)%3 === 0){
            result += ","
        }
    })
    result = result.split('').reverse().join('')
    return result[0] === "," ? result.slice(1) : result
 }