//import module for testing.
const sum = require('../sum')

/**To write a test for a function, we use 'test()' for jest. */
test('Properly adds two numbers', () =>{
    //expect() function use to check for conditions in test.
    expect(
        sum(1,2)
        ).toBe(3);
        //toBe, toEqual and many more are the matchers used in jest. 
});