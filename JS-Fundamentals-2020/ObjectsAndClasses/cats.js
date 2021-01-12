function cats(catsInfo) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let catAsString of catsInfo) {
        let [name, age] = catAsString.split(' ');
        cat = new Cat (name, age);
        cat.meow();
    }

}

cats(['Mellow 2', 'Tom 5']);