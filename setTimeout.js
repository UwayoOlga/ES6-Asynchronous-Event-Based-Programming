
//Display Time Every 3 Second

function showTime() {

    let dateTime= new Date();

    let time = dateTime.toLocaleTimeString();

    console.log(time)

     setTimeout(showTime, 3000);
}

showTime();

// Use clearTimeout() Method

let count = 0;

function increaseCount(){

    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);

clearTimeout(id); 
console.log('setTimeout is stopped.');













// Write a function to find the longest word in a sentence.

// Return the first longest word in the given string sentence.
// For example, in the string "The quick brown fox jumps over the lazy dog", the first longest word is "quick", which has 5 letters.

function findLongestWord(sentence) {
     
    const words = sentence.split(' ');
  
    let longestWord = '';
   
    for (const word of words) {
       
      const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
   
      if (cleanedWord.length > longestWord.length) {
        longestWord = word;  
      }
    }
  
    return longestWord;
  }
   