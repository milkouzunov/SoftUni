function arrayManipulations(input) {

    let numbers = input
    .shift()
    .split(' ')
   .map(Number);
   
   for (let i = 0; i < input.length; i++) {
       let [command, value, index] = input[i].split(' ');
       value = Number(value);
       index = Number(index);
       if (command === 'Add') {
           numbers.push(value); 
        } else if(command === 'Remove') {
            numbers = numbers.filter(element => element !== value);
        } else if (command === 'RemoveAt') {
            numbers.splice(value,1);
        } else if (command === 'Insert') {
            numbers.splice(index,0,value);
        }
        
    }
    return numbers.join(' ');
    
}

console.log(arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']));