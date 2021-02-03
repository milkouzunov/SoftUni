const { assert } = require('chai');
const isOddOrEven = require('./evenOrOdd');


describe('isOddOrEven', () => {
    it('incorrect input', () => {
        assert.isUndefined(isOddOrEven(2), 'input number'); 
    })
    it('is even', () => {
        assert.equal(isOddOrEven('co'), 'even', 'is even');        
    })
    it('is odd', () => {
        assert.equal(isOddOrEven('i'),'odd', 'is odd');
    })
})
