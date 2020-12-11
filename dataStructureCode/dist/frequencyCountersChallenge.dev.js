"use strict";

/* 
    Given two strings, write a function to determine if the second string is an anagram of the
    first. An anagram is a word, phrase, or name formed by rearranging the letters of another, 
    such as cinema, formed from iceman. 
*/
function anagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  var lookup = {};

  for (var i = 0; i < str1.length; i++) {
    var letter = str1[i]; //if letter exists increment, otherwise set to 1 

    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (var _i = 0; _i < second.length; _i++) {
    var _letter = second[_i]; //if cant find letter or letter is zero then its not an anagram. 

    if (!lookup[_letter]) {
      return false;
    } else {
      lookup[_letter] -= 1;
    }
  }

  return true;
}

function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  var lookup = {};

  for (var i = 0; i < str1.length; i++) {
    var letter = str1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (var _i2 = 0; _i2 < str2.length; _i2++) {
    var _letter2 = str2[_i2];

    if (!lookup[_letter2]) {
      return false;
    } else {
      lookup[_letter2] -= 1;
    }
  }

  return true;
}