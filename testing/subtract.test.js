const subtract = require('../subtract')

test('Properly Subtracting two numbers', () => {
    expect(
        subtract(5,2)
        ).toBe(3);
})