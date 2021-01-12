function email(input) {
    let pattern = /(?:^| )([A-Za-z0-9]+[-._]*)+\b@([a-zA-Z]+\-*[a-zA-Z]+\.[a-zA-Z]+\-*[a-zA-Z]+)(\.*[a-zA-Z]+\-*[a-zA-Z]+)*/g
    let validEmail = pattern.exec(input);

    while(validEmail){
        console.log(validEmail[0].trim());
        validEmail = pattern.exec(input);
    }
}

email(`Please contact us at: support@github.com.`)