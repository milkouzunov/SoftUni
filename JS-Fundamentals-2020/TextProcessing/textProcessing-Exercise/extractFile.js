function extractFile(input) {
    let file = {
        'File name': input.slice(input.lastIndexOf("\\") + 1,input.lastIndexOf('.')),
        'File extension': input.slice(input.lastIndexOf('.') + 1),
    }
    Object.entries(file).forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')