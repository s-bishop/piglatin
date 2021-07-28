"use strict";

const pl = (word) => {
    //converts to lower case
    word = word.toLowerCase ();
    //if word starts with a vowel
    const  vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(word[0])) {
        
        return word + "way";
    }else{//if a word starts with a consonant
        //make a variable to hold the prefix of the word
        let prefix = "";
        //loop throught the word until we see a vowel, while adding to our prefix variable
        for  (let i = 0; i < word.length; i++) {
            //if this is a consonant
            if (!vowels.includes(word[i])) {
                prefix += word[i]
            }
            //else we're on a vowel
            else {
                return word.slice(i) + prefix + "ay";
            }
        }
    }
}

module.exports = pl;