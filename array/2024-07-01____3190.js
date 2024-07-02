// Q:Find minimum operations to make all elements divisible by three.
// level : easy

// Let me jump directly to the solution part: 

// Approach 1 (Runtime : 52ms) :
let minimumOperations1 = (nums)=>{
    let flag = 0;
    let value = nums.map((x,i) => {
      if( x % 3 !==0){
        flag++;
      }
      return flag;
    })
    return Math.max(...value);
}
let nums = [1,2,3,4,5,6,7];
let output = minimumOperations1(nums);
console.log('minimum operations to make all the individual elements becoming a multiple of 3 is :',output)

//---------------=================================-----------------------------===============================-----------------------------

// Approach 2 (Runtime : 75ms) :
let minimumOperations2 = (nums) =>{
        let flag = 0;
        nums.forEach(x => {
            if( x % 3 !== 0){
                flag++;
            }
        })
        return flag;
}

//---------------=================================-----------------------------===============================-----------------------------

// Approach 3 (Runtime : 72ms) :
let minimumOperations3 = (nums) => {
        let value = nums.reduce((acc,curr) =>{
            if( curr % 3 !== 0){
                acc++;
            }
            return acc;
        },0)
        return value;
}

//---------------=================================-----------------------------===============================-----------------------------

// Approach 4 (Runtime : 66ms) :

let minimumOperations4 = (nums) => {
    let value = nums.filter(x => {
        return x % 3 !== 0;
    })
    return value.length;
}

////---------------=================================-----------------------------===============================-----------------------------

// Approach  5 (Using traditional for loop) (Runtime : 59ms) :

let minimumOperations5 = (nums) => {
        let  flag =0;
        for(let i=0;i<nums.length;i++){
            if(nums[i] % 3 !== 0){
                flag++;
            }
        }
        return flag;
}


// Bounus method , here it will return the array which has only the multiples of 3 ;
let minimumOperations6 = (nums) => {
    let value = nums.map(x =>{
        if(x % 3 === 1){
            --x;
        }else if (x % 3 === 2){
            ++x;
        }else {
            x;
        }
        return x;

    })
    console.log('value of array is :',value);
    return value;
}
let nums2 = [1,2,3,4,5,6];
console.log(minimumOperations6(nums2))