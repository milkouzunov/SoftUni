function stringLength(...strings) {
    let sumLength = strings.reduce((acc, a) => acc + a.length,0);
    let averageLength = sumLength / strings.length;
    console.log(sumLength);
    console.log(Math.round(averageLength));
}
stringLength('chocolate', 'ice cream', 'cake')