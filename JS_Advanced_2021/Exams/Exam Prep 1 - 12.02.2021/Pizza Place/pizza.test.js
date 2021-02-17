const { assert } = require('chai');

describe('Pizza Place', () => {
    describe('makeAnOrder', () => {
        it('throw Error', () => {
            assert.throw(() => pizzUni.makeAnOrder(['pizza']),'You must order at least 1 Pizza to finish the order.','input array');
            assert.throw(() => pizzUni.makeAnOrder(100),'You must order at least 1 Pizza to finish the order.','input number');
            assert.throw(() => pizzUni.makeAnOrder('pizza'),'You must order at least 1 Pizza to finish the order.','input string');
        })
        it('correct input', () => {
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'margarita'}),`You just ordered margarita`);
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'margarita', orderedDrink: 'cola'}),`You just ordered margarita and cola.`)
        })
    })
    describe('getRemainingWork', () => {
        it('pizza remaining', () => {
            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'margarita', status: 'preparing' }]),`The following pizzas are still preparing: margarita.`);
        })
        it('pizza ready', () => {
            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'margarita', status: 'ready' }]),'All orders are complete!');
        })
    })
    describe('orderType', () => {
        it('orderType == Carry Out', () => {
            assert.equal(pizzUni.orderType(5, 'Carry Out'),4.5);
        })
        it('orderType == Delivery', () => {
            assert.equal(pizzUni.orderType(5, 'Delivery'),5);
        })
    })
})