/*
Frequency Counters
- This pattern uses objects or sets to collect values/frequencies of values 
- This can often avoid the need for nested loops or O(N^2) operations with arrays / strings. 

Ex: write a function called same which accepts two arrays. 
The function should return true if every value in the array has its 
corresponding value squared in the second array. The frequency of values
must be the same. 
*/

//solution 1
function same(arr1, arr2){
    //if arr1 and arr2 do not have the same length of values return false
    if(arr1.length != arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        //correctIndex is  checking if arr2 has a value of arr1 squared
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //if value is -1 it means false
        if(correctIndex = -1){
            return false;
        }
        //removes values from arr2 of correctIndex
        arr2.splice(correctIndex, 1);  
        //reason why we splice is we cant reuse a value in arr2
        //ex arr1[2, 2, 3], arr2[4, 9, 3]
        //the above example would work without the splice. 
    }
    return true;
}


//solution 2 (refactored) //two seperate loops are better than two nested loops for efficiency. 
function sameRefactored(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key of arr2){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}


