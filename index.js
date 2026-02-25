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


}



def toDashes(list):
  new_list = []
  for letters in list:
    if letters != " ":
      new_list.append("_")
    else:
      new_list.append(" ")
  return new_list

def updateGameData(letter, dashes, phrase, guessLeft):
  for i in range(len(phrase)):
    if phrase[i] == letter:
      dashes[i] = letter

  if letter not in phrase:
    guessLeft -=  1

  return dashes, guessLeft

