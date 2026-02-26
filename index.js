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
  phrase_list = ['vertical','temple','shark', 'lighter', 'lebron james', 'confusion', 'goat', 'horse']
  phrase_list = (random(phrase_list))
  console.log(phrase_list)
  return phrase_list
}


function hangman(){



}

function userCheck(){
 const user = <input type="text"></input>
  return user
}


function sumbit_button(){
const user_input = getElement

}



function toDashes(){
  new_list = []
  for (let i = 0; i< selectWord,length; i++){
    if (selectWord[i] === " "){
      displayWord.push(" ");
    }
  
    else{
      displayWord.push("_");
    }
  }
  document.getElementByClassName("hangmantxt")[1].innerHTML = displayWord.join(" ")
  }

