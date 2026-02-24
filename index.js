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
