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

//right way
function sumZeroRight(arr){
    let left = 0; //gets the array value on the front
    let right = arr.length - 1; //gets the array value on the end
    while(left < right){ //while first value is less than last value
        let sum = arr[left] + arr[right]; 
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left ++
        }
    }
}

/*
Count Uniquie Values 
implement a function called countUniqueValues 
which accepts a sorted array, and counts the 
unique values in the array. There can be negative
numbers in the array, but it will always be sorted 

//remember that these functions only work with 
sorted arrays. 
*/
function countUniqueValues(arr){
    if(arr.length === 0){
        return 0; 
    }
    var i = 0; 
    for(var j = 1; j < arr.length; j++){
       if(arr[i] !== arr[j]){
           i++; 
           arr[i] = arr[j];
       }
       console.log(i, j); //to test/check.
    } 
    return i + 1; 
}

/* 
Implement a function called countUniqueValues which accepts a SORTED array, and counts
the unique values in the array. There can be negative numbers in the array, but it will always
be SORTED
*/
function countUniqueValuesMyWay(arr){
    let i = 0;//first value of the array
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;//goes up to next value 
            arr[i] == arr[j];
        }
        console.log(i, j);//check
    }
    return i + 1; 
}

/*
    SLIDING WINDOW 
    This pattern involves creating a window which can either be an array or number from
one position to another. 
    Depending on a certain condition, the window either increases or closes (and a new
window is created)
    Very useful for keeping track of a subset of data in an array/string etc. 
*/

/*
    write a function called maxSubArraySum which accepts an array of integers and numbers 
    called n. The function should calculate the maximum sum of n consecutive elements in 
    the array
*/
function maxSubArraySum(arr, num){
    if(num > arr.length){
        return null; 
    }
    let max = -Infinity; //max equal zero would work but since there can be values less than zero we start at negative infinity. 
    for(let i = 0; i < arr.length - num + 1; i++){
        let temp = 0; 
        for(let j = 0; j < num; j++){
            temp += arr[i + j]; 
        }
        if(temp > max){
            max = temp; 
        }
    }
    return max; 
}
