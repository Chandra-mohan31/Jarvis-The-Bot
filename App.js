const btn = document.querySelector(".talk");
//const content = document.querySelector(".content");
const app_state = document.querySelector("#mic__state");
//const chatMessage = document.querySelector(".chat");
const chatBar = document.querySelector(".chat__inputBar");



const greetings =[
    'im good ,how about u mate',
    'doing good my friend',
    'why do you ask that'
];
const hi=['hello dude','hi buddy','hey buddy'];

const weather =['weather is too good for you','you need a cold drink','its too hot out '];

const thanks = ['you are welcome','no mention','its my job buddy'];

const love = ['you are in trouble','love u too','have a party'];

const hate =['no problem','you loser',' dash you'];

const help=['i am sorry dude ','i cant help with that','i am better than humans','sure buddy'];

const name=['i am jarvis the bot ,Assistant of Chandra Mohan'];

const heyjarvis=['welcome sir','welcome chand'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("voice is active");
    app_state.src="active1.gif";
   
}
recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
   // content.textContent = transcript;
    var personchats = document.createElement("h3");
    personchats.innerHTML = transcript;
    document.getElementById("chats__container").appendChild(personchats);
    readOutLoud(transcript);
    //readOutLoud(text from the input of chat );
    app_state.src="micoff.png";
   
    
    
    
    

}
chatBar.addEventListener('click',()=>{
    
    var inputVal = document.getElementById("input__chat").value;
    readOutLoud(inputVal);
})

btn.addEventListener('click',()=>{
    recognition.start();
    
   // document.getElementById("mic__state").src = "mic__on.png";
   
   
});

function readOutLoud(message){
    //console.log(message);
    

    const speech = new SpeechSynthesisUtterance();
    //speech.text = message;
    speech.text = 'I am not programmed for what u say';
    if (message.includes('how are you')){
        const finalText =
               greetings[Math.floor(Math.random()*greetings.length)];
               speech.text = finalText;
    } else  if (message.includes('weather')){
        const finalText =
               weather[Math.floor(Math.random()*weather.length)];
               speech.text = finalText;
    } else  if (message.includes('love')){
        const finalText =
               love[Math.floor(Math.random()*love.length)];
               speech.text = finalText;
    } else  if (message.includes('hate')){
        const finalText =
               hate[Math.floor(Math.random()*hate.length)];
               speech.text = finalText;
    } else  if (message.includes('thank')){
        const finalText =
               thanks[Math.floor(Math.random()*thanks.length)];
               speech.text = finalText;
    } else  if (message.includes('help')){
        const finalText =
               help[Math.floor(Math.random()*help.length)];
               speech.text = finalText;
    }  else  if (message.includes('hi')){
        const finalText =
               hi[Math.floor(Math.random()*hi.length)];
               speech.text = finalText;
    }  else  if (message.includes('name')){
        const finalText =
               name[Math.floor(Math.random()*name.length)];
               speech.text = finalText;
    } else  if (message.includes('hello')){
        const finalText =
               hi[Math.floor(Math.random()*hi.length)];
               speech.text = finalText;
    }
    else  if (message.includes('hey')){
        const finalText =
               heyjarvis[Math.floor(Math.random()*heyjarvis.length)];
               speech.text = finalText;
    }
  
  
    
   
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
    console.log(speech.text);
    //chatMessage.textContent = speech.text;
    var botchats = document.createElement("P");
    botchats.innerHTML = speech.text;
    document.getElementById("chats__container").appendChild(botchats);
    
  
   

}