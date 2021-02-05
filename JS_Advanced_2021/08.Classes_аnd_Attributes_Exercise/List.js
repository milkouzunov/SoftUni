class List {
    constructor () {
        this.list = [];
        this.size = this.list.length;
    }

    add (element) {
        if (typeof element === 'number') {
            this.list.push(element);
            this.list.sort((a,b) => a - b);
            this.size = this.list.length;
        }
    }
    remove(index) {
        if(index < this.size && index >= 0 && typeof index === 'number') {
            this.list.splice(index,1);
            this.list.sort((a,b) => a - b);
            this.size = this.list.length;
        }
    }
    get (index) {
        if(index < this.size && index >= 0 && typeof index === 'number') {
            return this.list[index];
        }
    }
}

let list = new List();
list.add(6);
list.add(5);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.size);
