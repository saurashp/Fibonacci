function fibonacci(n){
    if (n<=1){
        return  n

    }
    let a=0, b=1, result=1
    for(let i =2;i<=n;i++){
        result = a+b
        a =b
        b = result
    }
    return result
}

let fibNum = 10
console.log("The "+fibNum+" fibonacci number in sequence is = " +fibonacci(fibNum))

function fibonacciSequence(a){
    if (a<=0){
        return[]
    }
    if (a===1){
        return [0]
    }

    let sequence = [0,1]

    for(let i=2;i<a;i++){
        sequence.push(sequence[i-1]+sequence[i-2])
    }
    return sequence;
}

let fib = 11
console.log("Fibonacci sequence till "+fib+"  is = "+fibonacciSequence(fib))