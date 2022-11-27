//This line below imports readline module
const readline = require('readline');

//Creating an interface for input and output
const speedDetector = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Declare an empty user input variable
let speed = " ";
let points = " ";

//asks user to enter speed and store it in the variable speed
speedDetector.question("Enter speed of car ? \n " , function(entered){
    speed = entered;

//speedDetector function
    function detector(){
        if (speed <=70){
            console.log("po")
        }
    }
    
    //closes input stream
    speedDetector.close()
})