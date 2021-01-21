//import module for testing.
const cloneArray = require('../cloneArray')

test('Properly clone Array',() =>{
    const array =[1,2,3]
    expect(cloneArray(array)).toEqual(array)
})