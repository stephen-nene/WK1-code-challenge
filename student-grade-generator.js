
const prompt = require('prompt-sync')();
//below is where we get input from the user and store what is inputed in studentMarks variable
let studentMarks = prompt("Enter student's marks ? ");
console.log(`Student's marks is :  ${studentMarks}`);

      //grading function that uses else-if statements to determine students grade
  function grading(studentMarks){
    
    if(studentMarks >= 0 && studentMarks < 40){
        console.log("Grade is E")
    }else if(studentMarks >= 40 && studentMarks < 49   ){
        console.log("Grade is D")
    }else if(studentMarks >= 49 && studentMarks < 59  ){
        console.log("Grade is C")
    }else if( studentMarks >= 60 && studentMarks < 79 ){
        console.log("Grade is B")
    }else if(studentMarks >= 79 && studentMarks < 100 ){
        console.log("Grade is A")
    }else {
        console.log("Student's marks is not valid");
    }
}

//call the garding function

  grading(studentMarks) 
