function inventory(array){
    let items = array.shift().split(', ');
    let [command, item] = array.shift().split(' - ');

    while(command !== 'Craft!'){
        

        if(command === 'Collect' && !items.includes(item)){
            items.push(item);
        } else if (command === 'Drop' && items.includes(item)) {
            let index = items.indexOf(item);
            items.splice(index,1);
        } else if (command === 'Combine Items' && items.includes(item.split(':')[0])){
            let [oldItem,newItem] = item.split(':');
            let index = items.indexOf(oldItem);
            items.splice(index+1,0,newItem)
        } else if (command === 'Renew' && items.includes(item)) {
            let index = items.indexOf(item);
            item = items.splice(index,1);
            items.push(item.toString());
        }
        [command, item] = array.shift().split(' - ');
    }
    console.log(items.join(', '));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )