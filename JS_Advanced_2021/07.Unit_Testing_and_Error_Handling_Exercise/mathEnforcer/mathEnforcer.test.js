const {assert} = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('incorrectInput', () => {
            assert.isUndefined(mathEnforcer.addFive('a'), 'input !== Number');
            assert.isUndefined(mathEnforcer.addFive({a:5}), 'input !== Number');
            assert.isUndefined(mathEnforcer.addFive([5]), 'input !== Number');
        })
        it('correctInput', () => {
            assert.equal(mathEnforcer.addFive(5),10, '5+5=10');
            assert.closeTo(mathEnforcer.addFive(1.2),6.2,0.1, '1.2+5=6.2');
            assert.equal(mathEnforcer.addFive(-2),3, '-2+5=3');
        })
    })

    describe('subtractTen', () => {
        it('incorrectInput', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'), 'input !== Number');
            assert.isUndefined(mathEnforcer.subtractTen({a:5}), 'input !== Number');
            assert.isUndefined(mathEnforcer.subtractTen([5]), 'input !== Number');
        })
        it('correctInput', () => {
            assert.equal(mathEnforcer.subtractTen(10),0, '10-10=0');
            assert.closeTo(mathEnforcer.subtractTen(1.2),-8.8, 0.1, '1.2-10=-8.8');
            assert.equal(mathEnforcer.subtractTen(-2),-12, '-2-10=12');
        })
    })

    describe('sum', () => {
        it('incorrectInput', () => {
            assert.isUndefined(mathEnforcer.sum('a',2), 'num1 !== Number');
            assert.isUndefined(mathEnforcer.sum(2,'a'), 'num2 !== Number');
            assert.isUndefined(mathEnforcer.sum({a:5},2), 'input !== Number');
            assert.isUndefined(mathEnforcer.sum(2,[5]), 'input !== Number');
        })
        it('correctInput', () => {
            assert.equal(mathEnforcer.sum(2,1),3, '2+1=3');
            assert.equal(mathEnforcer.sum(2,-3),-1, '2+(-3)=-1');
            assert.closeTo(mathEnforcer.sum(2.2,2.7), 4.9, 0.1, '2.2+2.7=2.9');
        })
    })
})