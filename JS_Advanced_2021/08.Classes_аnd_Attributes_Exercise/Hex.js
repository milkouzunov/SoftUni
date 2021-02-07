class Hex {
    constructor (number) {
        this.number = Number(number);
    }
    
    valueOf() {
       return this.number;
    }
    toString() {
        return `0x${(this.number.toString(16)).toUpperCase()}`
    }
    plus(number) {   
        return new Hex((this.number + Number(number.valueOf())));
    }
    minus(number){
        return new Hex((this.number - Number(number.valueOf())));
    }

    parse(text){
        return parseInt(text, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
