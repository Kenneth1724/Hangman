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
  phrase_list = ['vertical','temple','hungry sharks', 'lighter', 'lebron james', 'confusion', 'microwave', 'xylophone', 'hello world', 'capybara', 'nymph', 'crystallize', 'acknowledge', 'australian shepard', 'nightingale', 'chicken turtle']
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
      new_list.push(" _ ");
    }
  }console.log(new_list);
  
  return document.getElementById("word").textContent = new_list.join("");
  }

toDashes();

const hangman_pic = [
  "resources/hangman1.png", "resources/hangman2.png", "resources/hangman3.png", "resources/hangman4.png", "resources/hangman5.png", "resources/hangman6.png", "resources/hangman7.png"

]

function update_pic(){
  const hangman = document.getElementsByClassName("hangmanpic")[0];
  const pic = hangman.getElementsByTagName("img")[0];

  pic.srs = hangman_pic[wrong_guess];
}


function submit_button(){
  const input_ele = document.getElementById("user_input");
  const userInput = input_ele.value.toLowerCase();

  input_ele.value = " "

  if (userInput.length !==1){
    alert("Enter one letter")
    return;
  }
  if (guessed_letter == userInput){
    alert("You already guess this letter")
    return;
  }

 guessed_letter.push(userInput)

 let guess = false;
 for (let i = 0; i< selectWord.length; i++){
    if(selectWord[i] === userInput){
      new_list[i] = userInput
      guess = true;
  }
  }
  if(!guess){
    wrong_guess++;
    update_pic();
  }
  document.getElementsByClassName("hangmantxt")[0].innerHTML = new_list.join(" ");
  if(new_list.join("") === selectWord){
    alert("YOU Win")
  }
  if(wrong_guess >= max_Guess){
    alert("You lose the word was :" + selectWord);
  }
}
