function solve(string) {
    string = string.split('');
    
    for (let i = 0; i < string.length; i++) {
        let count = 0;
        for (let char = i+1; char < string.length; char++) {
            if(string[i] === string[char]){
                count++;
            } else {
                break;
            }
        }
        if(count >= 1) {
            string.splice(i+1, count)
        }
    }
    console.log(string.join(''));
}

solve('aaaaabbbbbcdddeeeedssaa')