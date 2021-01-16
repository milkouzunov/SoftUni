function solve(input) {
    let table = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];
    let isBool = false;

    while (input.length > 0) {
        let firstPlayer = input.shift().split(' ').map(Number);
        let [x, y] = firstPlayer;
        if (table[x][y] === false) {
            table[x][y] = 'X';
        } else {
            
                console.log('This place is already taken. Please choose another!');
                firstPlayer = input.shift().split(' ').map(Number);
                [x, y] = firstPlayer;
                table[x][y] = 'X';
            
        }
        checkWin(table);
        checkFreeSpaces(table);
        if (isBool) {
            break;
        }
        let secondPlayer = input.shift().split(' ').map(Number);
        [x, y] = secondPlayer;
        if (table[x][y] === false) {
            table[x][y] = 'O';
        } else {
            
                console.log('This place is already taken. Please choose another!');
                secondPlayer = input.shift().split(' ').map(Number);
                [x, y] = secondPlayer;
                table[x][y] = 'O';
            
        }
        checkWin(table);
        checkFreeSpaces(table);
        if (isBool) {
            break;
        }
    }
    table.forEach(row => console.log(row.join('\t')));


    function checkFreeSpaces(table) {
        if (!table[0].includes(false) && !table[1].includes(false) && !table[2].includes(false)) {
            console.log('The game ended! Nobody wins :(');
            isBool = true;
        }
    }
    function checkWin(table) {
        if ((table[0][0] === 'X' && table[0][1] === 'X' && table[0][2] === 'X') ||
            (table[1][0] === 'X' && table[1][1] === 'X' && table[1][2] === 'X') ||
            (table[2][0] === 'X' && table[2][1] === 'X' && table[2][2] === 'X') ||

            (table[0][0] === 'X' && table[1][0] === 'X' && table[2][0] === 'X') ||
            (table[0][1] === 'X' && table[1][1] === 'X' && table[2][1] === 'X') ||
            (table[0][2] === 'X' && table[1][2] === 'X' && table[2][2] === 'X') ||

            (table[0][0] === 'X' && table[1][1] === 'X' && table[2][2] === 'X') ||
            (table[0][2] === 'X' && table[1][1] === 'X' && table[2][0] === 'X')) {
            console.log('Player X wins!');
            isBool = true;
        }

        if ((table[0][0] === 'O' && table[0][1] === 'O' && table[0][2] === 'O') ||
            (table[1][0] === 'O' && table[1][1] === 'O' && table[1][2] === 'O') ||
            (table[2][0] === 'O' && table[2][1] === 'O' && table[2][2] === 'O') ||

            (table[0][0] === 'O' && table[1][0] === 'O' && table[2][0] === 'O') ||
            (table[0][1] === 'O' && table[1][1] === 'O' && table[2][1] === 'O') ||
            (table[0][2] === 'O' && table[1][2] === 'O' && table[2][2] === 'O') ||

            (table[0][0] === 'O' && table[1][1] === 'O' && table[2][2] === 'O') ||
            (table[0][2] === 'O' && table[1][1] === 'O' && table[2][0] === 'O')) {
            console.log('Player O wins!');
            isBool = true;
        }

    }
}

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]

);