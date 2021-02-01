function argumentInfo(...args) {
    let arguments = {};

    args.forEach(arg => {
        let type = typeof arg;
        if (!arguments.hasOwnProperty(type)) {
            arguments[type] = [];
        }
        arguments[type].push(arg);
    });
    let entriesArr = Object.entries(arguments);
    entriesArr.forEach(arg => {
        arg[1].forEach(value => {
            console.log(`${arg[0]}: ${value}`);
        })
    });
    entriesArr.sort((a, b) => b[1].length - a[1].length).forEach(arg => {

        console.log(`${arg[0]} = ${arg[1].length}`);

    });

}

argumentInfo(42, 'cat', 15, 'kitten', 'tomcat')