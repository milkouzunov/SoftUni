function solve(input) {
    let words = input.split(' ');

   let iterator = {
       next: function() {
           let isDone = words.length === 0;
           let currentWord = words.shift() ;
           return {
               value: currentWord,
               done: isDone,
           }
       } 
   }

   let nextElement = iterator.next();

   while (!nextElement.done) {
       console.log(nextElement.value);

       nextElement = iterator.next();
   }
}

