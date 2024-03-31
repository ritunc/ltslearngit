var foo = 'hello';
function showname(){
        foo = 'function inside';
        return;
        // function foo(){}
}
console.log(showname());
console.log(foo);