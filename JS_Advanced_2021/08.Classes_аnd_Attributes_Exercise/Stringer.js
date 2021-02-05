class Stringer {
    constructor(string, length) {
        this.originalStr = string;
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        } else {
            this.innerString = this.originalStr.substr(0, this.innerLength);
        }
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        } else {

            this.innerString = this.originalStr.substr(0, this.innerLength) + "...";

        }
    }

    toString() {
        if (this.innerLength == 0) {
            return "...";
        }


        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
