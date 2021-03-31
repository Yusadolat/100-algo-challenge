function add(param1: number, param2: number): number{
    return param1 + param2;
}

console.log(add(3,5))

function addMany(...param1: number[]): number{
    let total = 0;
    param1.forEach((number)=>{
        total += number
    })
    return total;
}

console.log(addMany(1,5,6,7,9,3,7))