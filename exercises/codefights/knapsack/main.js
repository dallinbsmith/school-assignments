function knapsackLight(int value1, int weight1, int value2, int weight2, int maxW) {
    if(weight1+weight2<=maxW) return (value1+value2);
    else if(weight1 <= maxW && weight2 <= maxW) return Math.max(value1,value2);
    else if(weight1 <= maxW) return value1;
    else if(weight2 <= maxW) return value2;
    else return 0;
}













function knapsackLight(value1, weight1, value2, weight2, maxW) {
    const valuearr = [];
    let totalweight = 0
    let totalvalue = 0

    if ((value1/weight1) > (value2/weight2)){
        valuearr.push(value1, weight1, value2, weight2);
    }else{
        valuearr.push(value2, weight2, value1, weight1);
    }
    while(true){
           totalvalue += valuearr[0]
           totalweight += valuearr[1]
           valuearr.splice(0,2) 
           if (totalweight + valuearr[1] >= maxW){return totalvalue}
    }
}

console.log(knapsackLight(10,5,6,4,8))