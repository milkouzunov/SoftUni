(function solve() {
    String.prototype.ensureStart = function (str) {
        let string = [...this].join('');
        let subStr = string.substr(0, string.indexOf(' '));
        if (!subStr.includes(str.trim())) {
            string = str + string;
            return string;
        } else {
            return string;
        }
    }
    String.prototype.ensureEnd = function (str) {
        let string = [...this].join('');
        let subStr = string.substr(string.lastIndexOf(' ', string.length));
        if (!subStr.includes(str.trim())) {
            string += str;
            return string;
        } else {
            return string;
        }
    }
    String.prototype.isEmpty = function () {
        let isBool = [...this].length === 0;
        return isBool;
    }
    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if (lastIndex != -1) {
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n - 3) + "...";
            }
        }
    }
    String.format = function (string, ...params) {
        [...params].forEach((param, i) => {
            string = string.replace(`{${i}}`, param);
        })
        return string;
    }
}());

var testString = 'the quick brown fox jumps over the lazy dog';
var answer = testString.truncate(43)
answer = answer.truncate(12);



let str = 'my string';

str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
