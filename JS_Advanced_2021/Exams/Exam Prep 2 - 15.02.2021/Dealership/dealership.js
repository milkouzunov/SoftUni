let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

const { assert } = require('chai');

describe('Dealership', () => {
    describe('newCarCost',() => {
        it('discountForOldCar', () => {
            assert.equal(dealership.newCarCost('Audi A4 B8',30000),15000)
        })
        it('withoutDiscount', () => {
            assert.equal(dealership.newCarCost('Audi A5',30000),30000)
        })
    })
    describe('carEquipment', () => {
        it('selectedExtras', () => {
            assert.deepEqual(dealership.carEquipment(['heated'],[0]),['heated']);
            assert.deepEqual(dealership.carEquipment(['heated', 'sport rims', 'seats', 'navigation'],[0,2,3]),(['heated','seats','navigation']));
        })
    })
    describe('euroCategory', () => {
        it('category >= 4', () => {
           assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: 14250.`);
        })
        it('category < 4', () => {
            assert.equal(dealership.euroCategory(2),'Your euro category is low, so there is no discount from the final price!');
         })
    })
})
