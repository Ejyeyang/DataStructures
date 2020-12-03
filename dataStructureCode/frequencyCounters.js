/*
Frequency Counters
- This pattern uses objects or sets to collect values/frequencies of values 
- This can often avoid the need for nested loops or O(N^2) operations with arrays / strings. 
*/

/*
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
    //same as above if arr1 and arr2 are not the same length return false
    if(arr1.length != arr2.length){
        return false;
    }
    //create two objects 
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    
    //example sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]) returns false
    //creates the props and values for object frequencyCounter1
    /*
    {1: 1, 
     2: 2, 
     3: 1, 
     5: 1}
    */
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    //creates the props and values for object frequencyCounter2
    /* how many times each element occurs in a key.
    {1: 1, 
    4: 2, 
    9: 1, 
    11: 1}
    */
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    //compare both objects of frequencyCounter1 and 2
    for(let key in frequencyCounter1){
        //if key in frequencyCounter1 squared is NOT in FrequencyCounter2 return false
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        //checks other way if if frequency counter 2 square does not equal key in frequecy counter 1
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}


