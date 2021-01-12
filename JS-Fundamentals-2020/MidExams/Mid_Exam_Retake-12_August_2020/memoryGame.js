function memoryGame(input) {
    let board = input.shift().split(' ');
    let moves = 0;
    let isWrongIndex = false;
    let indexes = input.shift();
    while (!indexes.includes('end')) {

        let [firstIndex, secondIndex] = indexes.split(' ');
        firstindex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        if((firstIndex === secondIndex) || firstIndex < 0 || firstIndex > board.length-1 || secondIndex < 0 || secondIndex > board.length -1) {
            if(board.length === 0){
                break;
            }
            moves++;
            let midOfBoard = Math.trunc(board.length / 2);
            let addElement = '-' + moves + 'a';
            board.splice(midOfBoard,0,addElement,addElement);
            console.log('Invalid input! Adding additional elements to the board');
        } else if (board[firstIndex] === board[secondIndex]){
            console.log(`Congrats! You have found matching elements - ${board[firstIndex]}!`);
            let bigIndex = Math.max(firstIndex,secondIndex);
            let smallIndex = Math.min(firstIndex,secondIndex)
            board.splice(bigIndex,1);
            board.splice(smallIndex,1);
            moves++;
        } else if (board[firstIndex] !== board[secondIndex]) {
            console.log(`Try again!`);
            isWrongIndex = true;
            moves++;
        }
        indexes = input.shift();
    }
    if(board.length > 0 || isWrongIndex){
        console.log(`Sorry you lose :(`);
        console.log(board.join(' '));
    } else {
        console.log(`You have won in ${moves} turns!`);
    }
}

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"]
    
    )