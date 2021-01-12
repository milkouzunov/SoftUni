function cardGame(input) {
    //value: 2: 2 ; 3 = 3 ... 10 = 10 
   let cardValues = {
       'J': 11, 
       'Q': 12, 
       'K': 13, 
       'A': 14,
   };
   let typeCard = {
       'S': 4,
       'H': 3,
       'D': 2,
       'C': 1,
   };
   let players = {};
   let oldCards = {};
   for (let line of input) {
       let [name, cards] = line.split(': ');
       cards = cards.split(', ');
       let valuesOfCards = [];
       let playerPoints = 0;
       if(!oldCards.hasOwnProperty(name)){
           oldCards[name] = [];
       }
       cards.forEach(card => {
       if(!oldCards[name].includes(card)){
           let [value, type, zero] = card.split('');
           if(zero){
               value = value + type;
               type = zero;
           } 
           if(value >= '2' && value <= '9' || value === '10') {
               value = Number(value);
               let cardValue = Number(typeCard[type])
               cardValue *= value;
               valuesOfCards.push(cardValue);
           } else {
               let cardValue = Number(typeCard[type]);
               value = Number(cardValues[value]);
               cardValue *= value;
               valuesOfCards.push(cardValue);
           }
       }
       
       oldCards[name].push(card);
       });

       playerPoints = valuesOfCards.reduce((acc, a) => acc + a, 0);
       if(!players.hasOwnProperty(name)){
           players[name] = playerPoints;
       } else {
           players[name] += playerPoints;
       }
   }
   for (const key in players) {
       console.log(`${key}: ${players[key]}`);
   }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )