function fruit(typeFruit, kg, pricePerKg) {
    let sum = (kg * 0.001) * pricePerKg
    console.log(`I need $${sum.toFixed(2)} to buy ${(kg * 0.001).toFixed(2)} kilograms ${typeFruit}.`);
}
fruit('apple', 1563, 2.35)