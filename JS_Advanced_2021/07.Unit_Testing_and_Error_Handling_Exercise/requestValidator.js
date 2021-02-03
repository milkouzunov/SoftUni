function requestValidator(obj) {
    if (!['GET', 'POST', 'DELETE', 'CONNECT'].includes(obj.method) || obj.method == undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!/[A-Za-z0-9\.]+|\*/gm.test(obj.uri) || obj.uri == undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(obj.version) || obj.version == undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if(/[^<>\\&'"]+/gm.test(obj.message) || obj.message !== ''  || obj.message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }
    


    return obj;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}
  
  
  
  
))