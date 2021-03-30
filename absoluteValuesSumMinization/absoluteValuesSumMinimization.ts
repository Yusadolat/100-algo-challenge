function absoluteValuesSumMinimization(a:number[]):number{
    const isEven = a.length / 2 === 0;
    return isEven ? a[a.length /2 -1] : a[Math.floor(a.length / 2)];
}

absoluteValuesSumMinimization([1,3, 5])