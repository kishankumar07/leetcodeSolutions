function createTargetArray(nums,index){
    let target = [];
    for(let i=0;i<index.length;i++){
        target.splice(index[i],0,nums[i]);
    }
    return target;
}
let nums = [1,2,3,4,5];
let index = [0,1,2,2,4]
console.log(createTargetArray(nums,index))