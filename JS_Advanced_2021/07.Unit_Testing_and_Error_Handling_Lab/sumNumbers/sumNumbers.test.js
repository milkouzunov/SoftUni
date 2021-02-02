const { expect } = require('chai');
const sum = require('./sumNumbers');

describe('sum numbers', () => {
    it('Input one number', () => {
        expect(sum([1])).to.equal(1);
    })
    it('Input two numbers', () => {
        expect(sum([1,1])).to.equal(2);
    })
    it('Input three numbers', () => {
        expect(sum([2,3,4])).to.equal(9);
    })
})