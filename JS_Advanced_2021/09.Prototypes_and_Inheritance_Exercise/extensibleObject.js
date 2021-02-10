function solve() {
    let proto = {};
    let obj = {};
    Object.setPrototypeOf(obj,proto);
    obj.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if(typeof value === 'function') {
                Object.getPrototypeOf(obj)[key] = value;
            } else {
                obj[key] = value;
            }
        });
    }
    return obj;
}

