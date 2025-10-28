//calculate sum and mean
function calculateSumAndMean(arr, n) {
    if(n>0){
        let sum=0,mean=0;
        for (let i=0;i<n;i++) {
            sum+=arr[i];
        }
        mean=sum/n;
        return [sum,mean.toFixed(1)];
    }
}
//find greatest element
function findGreatestElementAndIndex(arr) {
    let greatestIdx=0;
    for (let i =0 ;i<arr.length ;i++){
        if(arr[greatestIdx]<arr[i]){
            greatestIdx=i;
        }
    }
    return [arr[greatestIdx],greatestIdx];
    
}


//find second greatest
function findSecondGreatestElement(arr) {
    
    let sortedArr=arr.sort((a,b)=>a-b);
    return sortedArr[sortedArr.length-2]
    
}
