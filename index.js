let selectWord = choosePhrase()
let wrong_guess = 0;
let max_Guess = 6;
let new_list = [];
let guessed_letter = [];

function random(word){
    const randomIndex = Math.floor(Math.random() * word.length);
    return word[randomIndex];
}
function choosePhrase(){
  phrase_list = ['vertical','temple','shark', 'lighter', 'lebron james', 'confusion', 'goat', 'horse', 'hello world', 'capybara']
  phrase_list = (random(phrase_list))
  console.log(phrase_list)
  return phrase_list
}


function toDashes(){
  new_list = []
  for (let i = 0; i< selectWord.length; i++){
    if (selectWord[i] === " "){
      new_list.push(" ");
      console.log('hi')
    }
  
    else{
      console.log('bye')
      new_list.push("_");
    }
  }console.log(new_list);
  
  return document.getElementById("word").textContent = new_list.join("");
  }

toDashes();
