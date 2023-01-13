function arrowfunc () {
    let arr = [1, 2, 0, 4, 5, 0, null, "+"]
    let result = arr.filter(function(num) {
      if (num === 0)
        return false;
        if (num !=null && num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });
    
    console.log(result);
    console.log(result.length)
    let result1 = arr.filter(function(num) {
        if (typeof(num)!="string" && num % 2 != 0) {
            return  true;
        } else {
            return false;
        }
    });
    
    console.log(result1);
    console.log(result1.length)
    console.log('Колличество четных элементов: ', result.length, ' Колличество нечетных элементов: ', result1.length)
    
    let result2 = arr.filter(function(num) {
        if (num === 0) {
            return  true;
        } else {
            return false;
        }
    });
    console.log('Количество нулей: ', result2.length)
    console.log(result2)
    };
    arrowfunc(); 