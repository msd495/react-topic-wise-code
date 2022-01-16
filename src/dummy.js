

const sumToN = (arr,k)=>{
    //arr=[2,3,-1,4] , k=4
    let n=arr.length;
    let s=0;
    for(let i=0;i<n;i++){
        for (let j=0;j<i;j++){
            s+=arr[j];
            if(s===k){
                console.log("sum is ",k);
            }
        }
    }
}





const optimizeSumToN = (arr,k)=>{
    let prevSum=new Map();
    let currSum=0;
    let n=arr.length
    for(let i=0;i<n;i++){
        currSum+=arr[i];
        if(prevSum.has(currSum-k)){
            console.log("found the k")
            return true
        }
        prevSum.set(currSum,i)
    }
    return false
}


function bar() {

    return foo;

    foo = 10;

    function foo() {}

    var foo = '11';

}

alert(typeof bar());





function printAfterdelay(){

    setTimeout()

}




