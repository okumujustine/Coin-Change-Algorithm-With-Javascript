
/*
DOCUMENTATION AVAILABLE IN the readme.md file within the project root directory
*/

const possibleAmountChanges = (amount, denominations) => {
    
    let possibleChange = [] //initialize array to store posible change
    for (let i = 0; i <= amount; i++) {
        possibleChange[i] = 0; //loops through all amounts setting them to 0
    }
    possibleChange[0] = 1 // one way to retun zero if amount of denomination or coin is zero

    //returns change with denomination in denominations
    for (let j = 0; j < denominations.length; j++) {
        let denomination = denominations[j]
        let higherAmount = denomination

    // reduce change amount with available denomination.
    for ( higherAmount; higherAmount <= amount; higherAmount++) {

        let higherAmountBalance = higherAmount - denomination;
        possibleChange[higherAmount] += possibleChange[higherAmountBalance];

    }
    
}
return possibleChange[amount] //returns possible changes
}


let denominations = [1, 2, 4]; //enter denominations array values
let amount = 7; //enter to change amount here

//check if sum of the denominations equals amount of money
const sumDenominationEqualsAmount = (amount,denominations) => {
   
   sumDenomination = denominations.reduce((a, b) => a + b, 0)//sum of denominations
   
   if (amount !== sumDenomination){
       console.log(`Amount must equals sum of denomination`)
   }else{
    return (possibleAmountChanges(amount,denominations)) //call posible change
   }

}

//if denomination equals amount, return possible change
console.log(sumDenominationEqualsAmount(amount,denominations))


//export functions to be accessed in other files(test)
module.exports = {
    posibleChanges:possibleAmountChanges,
    denominationEqualsAmount:sumDenominationEqualsAmount
}