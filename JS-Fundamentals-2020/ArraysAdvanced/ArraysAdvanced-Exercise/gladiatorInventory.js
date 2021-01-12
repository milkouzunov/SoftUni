function gladiatorInventori(input) {
    let inventory = input.shift()
    .split(' ');

    for (let i = 0; i < input.length; i++) {
        let [command, item] = input[i].split(' ');
        let index = 0;
        if(command === 'Buy' && !inventory.includes(item)) {
            inventory.push(item);
        } else if (command === 'Trash' && inventory.includes(item)) {
            index = inventory.indexOf(item);
            inventory.splice(index,1);
        } else if (command === 'Repair' && inventory.includes(item)) {
            index = inventory.indexOf(item);
            let repItem = inventory.splice(index,1).toString();
            inventory.push(repItem);
        } else if (command === 'Upgrade' ) {
            let upgradeItem = item.split('-')[0];
            if(!inventory.includes(upgradeItem)) {
               break;
            }
            index = inventory.indexOf(upgradeItem);
            inventory.splice(index + 1, 0, item.replace('-',':'));
        }
        
    }
    console.log(inventory.join(' '));

}