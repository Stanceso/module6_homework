function sum(x) {
    return function (y) {
        return x + y;
    };
}
 let f = sum(5)(1);
console.log(f);