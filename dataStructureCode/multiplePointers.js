//[-4, -3, -2, -1, 0, 1, 2, 5]
//"djkafhjkshflkjsdhflkj"
/*
Write a function called sumZero which accepts a sorted array of integers. The function should find the 
first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined
if a pair does not exist. 

example
sumZero([-3, -2, -1, 0, 1, 2, 3]) //[-3, 3]
sumZero([-2, 0, 1, 3]) //undefined
sumZero([1, 2, 3])
*/

//Naive solution (time Complexity O(N^2)) (space Complexity - 0(1))
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}