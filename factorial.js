let factorial = function(number){
    let result = 1;
    while(number>0){
        result = result * number;
        number--;
    }
    return result;
}
console.log(factorial(5));