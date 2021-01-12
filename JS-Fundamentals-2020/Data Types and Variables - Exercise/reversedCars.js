function solve (char1, char2, char3) {
   let charsReversed = ([char1, char2, char3]).reverse();
   let result = charsReversed.join(' ')
   console.log(result)
}

solve('A',
'B',
'C'
)