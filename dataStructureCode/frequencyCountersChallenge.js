/* 
    Given two strings, write a function to determine if the second string is an anagram of the
    first. An anagram is a word, phrase, or name formed by rearranging the letters of another, 
    such as cinema, formed from iceman. 
*/

function anagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    const lookup = {};
    for(let i = 0; i < str1.length; i++){
        let letter = str1[i];
        //if letter exists increment, otherwise set to 1 
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        //if cant find letter or letter is zero then its not an anagram. 
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

function validAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    const lookup = {};
    for(let i = 0; i < str1.length; i++){
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < str2.length; i++){
        let letter = str2[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}