// Using two for loops

function goodPairs(arr1,arr2){
    let flag =0;
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] % (arr2[j] * k) === 0){
                flag++;
            }
        }
    }
    return flag;
}
let arr1 = [1,2,3];arr2 = [3,2,5],k=1;
console.log(goodPairs(arr1,arr2))