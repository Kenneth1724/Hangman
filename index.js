
function random(word){
    const randomIndex = Math.floor(Math.random() * word.length);
    return word[randomIndex];
}
function choosePhrase(){
  phrase_list = ['vertical','temple','shark', 'lighter', 'divorce', 'lebron james', 'confusion', 'penetrate', 'minor', 'drake', 'spread', 'goat', 'horse', 'diddy']
  phrase_list = (random(phrase_list))
  console.log(phrase_list)
  return phrase_list
}