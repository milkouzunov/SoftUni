function extendProp(classN, species = 'Human') {
    classN.prototype.species = species;
    classN.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}