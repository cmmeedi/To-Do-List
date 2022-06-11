/*

This will be a TODO list for the user to add tasks, list the tasks they've added, delete tasks or exit the app.

*/

// const express = require(`express`);
// const app = express();

// const { listen } = require("express/lib/application");

 
//The first prompt asking the user to enter a command they would like to start with
let action = prompt(`enter a command`);

//Here is the creation of the array with some dummy tasks for testing purposes
const toDo = [
    `First test Task`,
    `Second test Task`
]

//A while loop is implemented to test the user input and prevent an infinite loop.
//as long as the user has not entered `quit`
while(action !== `quit`){
    //the prompt will continue to prompt the user with the statement below
    action = prompt(`Please enter a valid command from the list`);

    //if the user enters in `new`
    if(action === `new`){
        newTask();
    }
    //if the user types in list then the displaylist function will be called
    else if(action === `list`){
        displayList();
    }
    else if(action === `delete`){
        // let deleteTask = toDo.splice(toDo[parseInt(prompt(`Please enter the number referencing the task you would like to delete`)) - 1, 1]);
        deleteTask();
        displayList();
    }
}

console.log(`Exiting the app`);

//These are the functions that are to be called within the while loop in accordance to what the user inputs into the prompts

//This is the newTask function that is called when the user enters `new` into the prompt 
function newTask(){
    //the below message will appear
    console.log(`enter in a task`);
    //and whatever the user types in will be added to the array
    action = toDo.push(prompt(`Please enter in a task you would like to add to your ToDo List`));
    //and the display list function will be called to display the list with the new addition added to it
    displayList();
}

//Here is a function that will later be called to be able to do what is within.  
function displayList(){
    //A variable is created to keep track of which index each item is located in
    let count = 0;
    //Then a little bit of style and pizzazz is added to the console app
    console.log(`_____________________________`);
    console.log(`*****************************`);
    //a for-of loop is added to iterate over each item in the toDo array
    for(task of toDo){
        //Count is incremented because not everyone is used to indexes starting at 0
        count++;
        //The a string template literal of count is logged in the console with a concatenation of a space and then the string template literal of `task` which is the indices of the array
        console.log(`***** ${count + `: ` + task} *****`);
        //pizzazz is added to each iteration
        console.log(`-----------------------------`);
    }
    //and a bit more to end it off
    console.log(`*****************************`);
}

function deleteTask(){
    //This is a new variable that will save the user input number and subtract 1(remember because the count starts at 1 and not zero so we need to accommodate for that)
    let deleteTask = parseInt(prompt(`delete number`) - 1);
    //That number is then added to the index position of the splice function and 1 is populated for the count of items to delete
    toDo.splice(deleteTask, 1);
    //Then 
    console.log(`The task at position ${deleteTask + 1} has been removed`);

}

