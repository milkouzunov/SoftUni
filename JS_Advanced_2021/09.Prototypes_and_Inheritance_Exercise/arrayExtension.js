(function solve() {

    Array.prototype.last = function () {
        return this[this.length - 1]
    }
    Array.prototype.skip = function (n) {
        let arr = [];
        arr = this.slice(n, this.length)
        return arr;
    }
    Array.prototype.take = function (n) {
        let arr = [];
        arr = this.slice(0, n)
        return arr;
    }
    Array.prototype.sum = function () {
        return this.reduce((acc, c) => acc + c, 0)
    }
    Array.prototype.average = function () {
        return this.reduce((acc, c) => acc + c / this.length, 0)
    }
}());

let arr = [1,2,3];
console.log(arr.skip(1))






