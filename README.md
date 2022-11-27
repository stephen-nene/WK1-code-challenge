# WEEK-1-CODE-CHALLNGE

# Challenge 1: Student Grade Generator

  ## Instructions
   
   * Write a javascript program that prompts the user to input student marks
   * The input should be between 0 and 100.
   * Then output the correct grade arcoding to the criteria below: 
        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

  ## Procedure

    ### step 1
   to prompt the user to enter grade in our terminal(NodeJs) we have to import the readline() package module

   ```javascript
   //This line below imports readline module
   const readline = require('readline');
   ```
   ### step 2
   Create an interface for our input and output operations.

   ```javascript
      const r1 = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
      });
   ```
 we can declare an empty variable using let to store our student mark from the user input.

   ```javascript
       let studentMarks = " ";
   ```
   ### step 3

we use .question() to ask the user to enter marks and pass it to the empty studentMarks variable.

   ```javascript
           r1.question("Enter student's marks ? \n " , function(number){
             studentMarks = number;
           console.log("Student's marks is : " + studentMarks);
       })
   ```
### step 4

declare a function called grading where we use else-if to do our grading and console.log the outputs according to our criteria.

  ```javascript

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

   ```
we call the grading function at the end and finally close the input stream prompt.

    ```js
         grading()

         r1.close()
    ```



# Challenge 2: Speed Detector

# Challenge 3: Net Salary Calculator