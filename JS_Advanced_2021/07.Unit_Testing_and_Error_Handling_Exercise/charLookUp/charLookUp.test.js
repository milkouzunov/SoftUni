const { assert } = require('chai');
const lookupChar = require('./charLookUp');

describe('check lookupChar', () => {
    it('incorrect input', () => {
        assert.isUndefined(lookupChar({'a':'a'},1), 'not string');
        assert.isUndefined(lookupChar(1,1), 'not string');
        assert.isUndefined(lookupChar('char',1.2), 'not string');
        assert.isUndefined(lookupChar('str','a'), 'index not number');
    })
    it('invalid index', () => {
        assert.equal(lookupChar('', 0),'Incorrect index', 'index == 0');
        assert.equal(lookupChar('char',-1),'Incorrect index', 'index < 0');
        assert.equal(lookupChar('str',3),'Incorrect index', 'index >= string.length');
    })
    it('valid input', () => {
        assert.equal(lookupChar('char',1),'h', 'index of string  == h');
        assert.equal(lookupChar('str',2),'r', 'index of string  == r');
    })
})