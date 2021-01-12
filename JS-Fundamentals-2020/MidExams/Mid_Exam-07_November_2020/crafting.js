function solve(input) {
    let elements = input.shift().split('|');
    let line = input.shift();
    while (!line.includes("Done")) {
        let [command, direction , index] = line.split(' ');
        index = Number(index);
        if(command === 'Move' && (direction === 'Right' && index < elements.length-1) && (elements.length > index && index >= 0)) {
            let curr =  elements.splice(index+1,1).toString();
            elements.splice(index+1,0, elements[index]);
            elements.splice(index,1, curr);
        } else if (command === 'Move' && (direction === 'Left' && index !== 0) && (elements.length > index && index >= 0)) {
            let curr =  elements.splice(index,1).toString();
            elements.splice(index,0, elements[index-1]);
            elements.splice(index-1,1, curr);
        } else if (command === 'Check' && direction === 'Odd') {
            let oddElemens = elements.filter((v,i)=> i % 2 !== 0)
            console.log(oddElemens.join(' '));
        } else if (command === 'Check' && direction === 'Even') {
            let evenElements = elements.filter((v,i)=> i % 2 === 0);
            console.log(evenElements.join(' '));
        }
        line = input.shift();
    }
    
    console.log(`You crafted ${elements.join('')}!`);
    


}

solve(['Ve|or|nd|st|ke|ri',
    'Check Even',
    'Move Right 5',
    'Move Left 2',
    'Move Left 0',
    'Move Right 4',
    'Done']

)