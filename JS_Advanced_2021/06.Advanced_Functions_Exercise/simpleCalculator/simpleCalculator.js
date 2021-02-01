function result() {
    let num1 = 0;
    let num2 = 0;
    let result;
    function init(selector1, selector2, resultSelector) {
        num1 = document.querySelector(selector1);
        num2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }
    function add() {
        result.value = Number(num1.value) + Number(num2.value);
    }
    function subtract() {
        result.value = Number(num1.value) - Number(num2.value);
    }
    


    return {
        init,
        add,
        subtract
    }
}




let obj = result();

obj.init("#num1","#num2",'#result');

num1.val(5);
num2.val(3);
obj.add();
expect(res.val()).to.equal('8',"Incorrect result");