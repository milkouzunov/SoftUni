let PaymentPackage = require('./PaymentPackage');
let { assert } = require('chai');

describe('PaymentPackage', () => {
    describe('Test value', () => {
        it('value non-number', () => {
            
            assert.throw(() => new PaymentPackage('name'), 'Value must be a non-negative number', "invalid number");
            assert.throw(() => new PaymentPackage('name', ''), 'Value must be a non-negative number', "invalid number");
            assert.throw(() => new PaymentPackage('name', -1), 'Value must be a non-negative number', "invalid number");
            assert.throw(() => new PaymentPackage('name', [1]), 'Value must be a non-negative number', "invalid number");
            assert.throw(() => new PaymentPackage('name', { a: 1 }), 'Value must be a non-negative number', "invalid number");
        });
        it('valid value', () => {
            let obj = new PaymentPackage('test', 1)
            assert.equal(obj.value,1, '10 == 10');
            assert.equal(obj.value = 10, 10, 'obj.value = 10')
        })

    })
    describe('Test name', () => {
        it('name non-string', () => {
            assert.throw(() => new PaymentPackage('', 1), 'Name must be a non-empty string', "invalid string");
            assert.throw(() => new PaymentPackage(1, 1), 'Name must be a non-empty string', "invalid string");
            assert.throw(() => new PaymentPackage(['str'], 1), 'Name must be a non-empty string', "invalid string");
            assert.throw(() => new PaymentPackage({ 'a': 'a' }, 1), 'Name must be a non-empty string', "invalid string");
        })
        it('valid name', () => {
            let obj = new PaymentPackage('test', 1)
            assert.equal(obj.name,'test', 'test == test');
            assert.equal(obj.name = 'testName','testName', 'obj.name = testName')
        })
    })
    describe('Test VAT', () => {
        it('VAT non-number', () => {
            let obj = new PaymentPackage('test', 1)
            assert.throw(() => obj.VAT= '', 'VAT must be a non-negative number', "invalid number");
            assert.throw(() => obj.VAT= -1, 'VAT must be a non-negative number', "invalid number");
            assert.throw(() => obj.VAT= [1], 'VAT must be a non-negative number', "invalid number");
            assert.throw(() => obj.VAT= {a:1}, 'VAT must be a non-negative number', "invalid number");
        })
        it('valid VAT', () => {
            let obj = new PaymentPackage('test', 1);
            assert.equal(obj.VAT, 20, 'VAT == 20');
            assert.equal(obj.VAT = 15, 15, 'VAT == 15');
        })
    })
    describe('Test active', () => {
        it('active non-boolean', () => {
            let obj = new PaymentPackage('test', 1);
            assert.throw(() => obj.active = '', 'Active status must be a boolean', 'active non-boolean');
        })
        it('working active', () => {
            let obj = new PaymentPackage('test', 1);
            assert.equal(obj.active,true, 'obj.active == true');
            assert.equal(obj.active = false,false, 'obj.active == false');
        })
    })
    describe('Test toString', () => {
        it('working toString', () => {
        let  obj = new PaymentPackage('HR Services', 1500);
        assert.equal(obj.toString(),'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800')
        });
        it('working toString - active = false', () => {
            let  obj = new PaymentPackage('HR Services', 1500);
            obj.active = false;
            assert.equal(obj.toString(),'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800')
            });
    })
})

