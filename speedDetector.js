//loading the prompt-sync module in our code and exports it to prompt variable
const promptSpeed = require(`prompt-sync`)();
//ask the user to enter speed of car
let speed = promptSpeed(`Enter speed of car: `)

console.log(`Car's speed is :  ${speed} Kmph`);
//declare function to decide whether speed is ok or not
function speedDetector (speed){
    //declare an unassigned function using let for storing points of the car
    let points;
//if-else statement to determine if speed is greater than 70 or not and assign result to points variable
    if(speed <=70){
        points = 0;
    }
    else{
        //math.floor- will round off our points the closest point
        points = Math.floor((speed - 70)/5);
    }
//another if-else to determine points value and determine what points is 
    if(points <=12 && points > 0){
        console.log(`Points: ${points}` );
    }
    else if(points >12){
        console.log('License suspended');
    }
    else{
        console.log('Your points are Ok');
    }
}

speedDetector(speed);