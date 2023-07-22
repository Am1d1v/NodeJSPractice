

/*

setTimeout(() => {
    console.log('Timeout');
}, 0);

function fib(n){
    if( n === 0 | n ===1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2)
}

console.log(fib(40));

*/

/*

setTimeout(() => {
    console.log('Timeout');
}, 0);

function fib(n){
    return new Promise((resolve, reject) => {
        if( n === 0 | n ===1) {
          return  resolve(n);
        }
        Promise.all([fib(n - 1), fib(n - 2)])
        .then(([fib1, fib2]) =>{
            resolve(fib1 + fib2)
        });
    })
    
}

fib(10).then((res) => console.log(res));

*/



function fib(n){
    if( n === 0 | n ===1) {
        return n;
    }

    let fib1 = 0;
    let fib2  = 1;
    let sum;

    for(let i = 1; i < n; i++){
        sum = fib1 + fib2;  
        fib1 = fib2;
        fib2 = sum;
        //console.log(sum);
    }
    return sum;
}

console.log(fib(10));