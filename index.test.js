const {posibleChanges, denominationEqualsAmount}  = require('./index')

//test if possible change is within array
test('takes in an array of deminations and amount of money to give possible changes', () => {
    expect(posibleChanges(7,[1, 2, 4])).toBe(6)
})

test('checks if total of denomination is equal to the amount of money then returns the posible change', () => {
    expect(denominationEqualsAmount(7,[1, 2, 4])).toBe(6)
})