function solve(string) {
let words = string.split(/(?=[A-Z])/);
console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')