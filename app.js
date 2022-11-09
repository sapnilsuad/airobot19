const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Sir");
    }

    else if(hr == 12) {
        speak("Good noon Sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Sir");
    }

    else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', ()=>{ 
    speak("Activating Alpha");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "It's my fault, I did not understand what you said!"; 

    if(message.includes('hey') || message.includes('hello') || message.includes('hi')) {
        const finalText = "Hello Sir How can i help you?";  
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine sir tell me how can i help you";
        speech.text = finalText;
    }
    else if(message.includes('who is created you')) {
        const finalText = "Sapnil is created me he is intelligent and smart";
        speech.text = finalText;
    }
    else if(message.includes('what is your responsibility')) {
        const finalText = "my responsibility is to serve human";
        speech.text = finalText;
    }
    else if(message.includes('how old are you')) {
        const finalText = "I was just born yesterday"; 
        speech.text = finalText;
    }
    else if(message.includes('nice to meet you')) {
        const finalText = "its nice to meet you too"; 
        speech.text = finalText;
    }
    else if(message.includes('bye') || message.includes('bye bye') ||message.includes('good bye')) {
        const finalText = "bye i look forward to speaking with you again"; 
        speech.text = finalText;
    }
    else if(message.includes('who is the most handsome person in the world')) {
        const finalText = "Its surely Sapnil he is tall and handsome";  
        speech.text = finalText;
    }
    else if(message.includes('tell me something about you')) {
        const finalText1 = "i am a virtual assistant robot based on artificial intelligent i was created using html css bootstrap javascript ajax i am always availabe to help human beings"; 
        speech.text = finalText1; 
    }
    else if(message.includes('aftab uddin school & college')) {  
        const finalText = "aftab uddin school and college is an educational institution established by late Alhaj Jahurul Islam "; 
        speech.text = finalText;
    }
    else if(message.includes('tell me about aftab uddin school & college')) {  
        const finalText = "aftab uddin school and college is an educational institution established by late Alhaj Jahurul Islam "; 
        speech.text = finalText;
    }
    else if(message.includes('can you sing?')) {  
        window.open("https://www.youtube.com/watch?v=ADpdnb-Uof0", "_blank");
        const finalText = "My singing voice is not so good, if you want I can play a song for youI was just born yesterday"; 
        speech.text = finalText;
    }
    else if(message.includes('name')) {
        const finalText = "My name is Alpha";
        speech.text = finalText;
    }
    
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('open facebook')) {
        window.open("https://facebook.com", "_blank");
        const finalText = "Opening facebook"; 
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
