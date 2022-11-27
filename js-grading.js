//This line below imports readline module
const readline = require('readline');

//Creating an interface for input and output
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Declare an empty user input variable
let studentMarks = " ";

//asks user to enter student marks and store it in the variable studentMarks
r1.question("Enter student's marks ? \n " , function(number){
    studentMarks = number;
    console.log("Student's marks is : " + studentMarks);

      //grading function
  function grading(){
    if(studentMarks > 79){
        console.log("Grade is: " + "A")
    }else if(studentMarks >=60 ){
        console.log("Grade is: " + "B")
    }else if(studentMarks >= 49){
        console.log("Grade is: " + "C")
    }else if(studentMarks >= 40){
        console.log("Grade is: " + "D")
    }else{
        console.log("Grade is: " + "E")
    }
}

//call the garding function
grading()

    //closes input stream prompt
    r1.close();
})



