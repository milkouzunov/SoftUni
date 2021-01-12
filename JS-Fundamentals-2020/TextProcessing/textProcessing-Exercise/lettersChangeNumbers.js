function lettersChangeNumbers(input) {
     let englishLetters = " abcdefghijklmnopqrstuvwxyz".split("");
     input = input.split(' ').filter(x => x !== '');
     let totalSum = 0;
     for (let element of input) {
         let [letterBefore, number, letterAfter] = element.split(/([a-zA-Z])/).filter(x => x !== '')
         number = Number(number);
         let sum = 0;
         let position = 0;
         if(letterBefore === letterBefore.toUpperCase()) {
              position = englishLetters.indexOf(letterBefore.toLowerCase());
              sum = number / position;
         } else {
              position = englishLetters.indexOf(letterBefore.toLowerCase());
              sum = number * position;
         }
         if(letterAfter === letterAfter.toUpperCase()) {
              position = englishLetters.indexOf(letterAfter.toLowerCase());
              sum -= position;
         } else {
              position = englishLetters.indexOf(letterAfter.toLowerCase());
              sum += position;
         }
         totalSum += sum;
     }
     console.log(totalSum.toFixed(2));
  }

lettersChangeNumbers('A12b s17G')