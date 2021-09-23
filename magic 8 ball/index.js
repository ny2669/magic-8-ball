import randomcolor from "randomcolor"

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]




// generate random light colors: 
    adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})
   
let textIn = document.getElementById('text-in')
const adviceDisplay = document.getElementById('adviceDisplay');
const adviceBtn = document.getElementById('adviceBtn');
const adviceBtn2 = document.getElementById('adviceBtn2');


adviceBtn.addEventListener('click', function(){
    
    // two way to do this 1) use * 6 or array.length
   let  randText = Math.floor(Math.random() * advice.length);
  
    
  adviceDisplay.textContent = advice[randText]
   adviceDisplay.style.color = "red"
  
})


adviceBtn2.addEventListener('click', function(){
    
   
         let input = textIn.value 
  
  advice.push(input)
  
 textIn.value = ''
    
 
})
    
    

