var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story",
        "ending" : 'none'
    },
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 5
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "You walk down a long stone hallway and hear noise.",
        "ending" : 'none'
    },
    {
        "id": 3,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Climb ladder",
        "title": "The hungry beast",
        "description": "you climb a ladder and see a beast that eats you.",
        "ending" : 'bad'
    },
    {
        "id": 4,
        "choices": {
            "first": 8,
            "second": 9
        },
        "choiceText": "Into Sewer",
        "title": "The Sewer",
        "description": "There is a way out.",
        "ending" : 'good'
    },
    {
        "id": 5,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Off the cliff",
        "title": "Jump off the cliff",
        "description": "That was a bad idea.",
        "ending" : 'bad'
    },
    {
        "id": 6,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Game over",
        "title": "Game over",
        "description": "You're done.",
        "ending" : 'bad'
    },
    {
        "id": 7,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Try again",
        "title": "Try again",
        "description": "This is bad.",
        "ending" : 'bad'
    },
    {
        "id": 8,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "You are successful in your quest.",
        "title": "Treasure chamber",
        "description": "You're the winner.",
        "ending" : 'good'
    },
    {
        "id": 9,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "The end",
        "title": "Treasure chamber",
        "description": "You got the treasure.",
        "ending" : 'good'
    }
];


//updates the screen to show the current description and choices
//requires the id of the new set of instructions
function nextStep(id) {
    //first we need to get the new item from the list of instructions
    var instruction = getItem(instructions, id);

    //then we need to update the screen with the main description
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);

    //then get the items for choice1 and 2 from the list
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);

    //check to see if they are endpoints

    //if endpoints then end the game


    //if not update those sections on the screen with the choiceText
    updateElement('choiceOne', choice1.choiceText);
    updateElement('choiceTwo', choice2.choiceText);
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);
    //check to see if the story is at the end
    end(instruction);
}

//1. create the getItem, updateElement, and updateButton functions

//getItem: gets an item from a list by id
//requires the list and id of the desired element
//write a for statement to check each set of instruction

function getItem(item, id) {
    for( var i = 0; i < item.length; i++){

        if(id == item[i].id){
            return item[i];
        }
    }
}

//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.

function updateElement(elementId, choice) {
    var element = document.getElementById(elementId);
    element.innerHTML = choice;
}
//updateButton: sets the onclick event for a button with the id of the item it chooses

function updateButton(button, choice){
    document.getElementById(button).setAttribute('onclick', 'nextStep(' + choice +')');
}

//2. then create and use a function to initialize the game to step 1



//3. other needed functions
//restart: resets the game back to the beginning.
function restart() {
    nextStep(1);
    document.getElementById('end').innerHTML = '';
}

//happy ending: does whatever we want it to do when they end in a good place

//sad ending: does whatever we want it to do if they end at a bad place

// Lynette Warnberg

//var instructions = [
//    {
//        "id": 1,//in order to get the value you need to call the key.
//        "choices": {
//            "first": 2,
//            "second": 3
//        },
//        "choiceText": "choose 1",
//        "title": "The Adventure Begins",
//        "description": "This is where you setup your initial story",
//        "ending": false,
//        "ending_description": ""
//    },
//    {
//        "id": 2,
//        "choices": {
//            "first": 4,
//            "second": 5
//        },
//        "choiceText": "Go Left",
//        "title": "The long hallway",
//        "description": "Describe the current setting",
//        "ending": false,
//        "ending_description": ""
//    },
//    {
//        "id": 3,
//        "choices": {
//            "first": 6,
//            "second": 7
//        },
//        "choiceText": "Go Right",
//        "title": "The hungry beast",
//        "description": "This is probably not going to end well.",
//        "ending": true,
//        "ending_description": "The beast ate you and your story is over."
//    }];
//
//
////updates the screen to show the current description and choices
////requires the id of the new set of instructions
//function nextStep(id) {
//    //first we need to get the new item from the list of instructions
//    var instruction = getItem(instructions, id);
//    console.log(instruction);
//    //then we need to update the screen with the main description
//    updateElement('title', instruction.title);
//    updateElement('description', instruction.description);
//
//    //then get the items for choice1 and 2 from the list
//    var choice1 = getItem(instructions, instruction.choices.first);
//    var choice2 = getItem(instructions, instruction.choices.second);
//
//    //check to see if they are endpoints
//
//    //if endpoints then end the game
//
//
//    //if not update those sections on the screen with the choiceText
//    updateElement('choiceOne', choice1.choiceText);
//    updateElement('choiceTwo', choice2.choiceText);
//    updateButton('buttonOne', choice1.id);
//    updateButton('buttonTwo', choice2.id);
//}
//
//function getItem(instructionsJSON, instructionsId) {
//    for (i=0; i<instructions.length; i++){
//        if (instructionsJSON[i].instructionsId==instructionsId){
//            return instructionsJSON[i];
//        }
//}
//
//function updateElement(idOfUpdatedElement, whatToInsert) {
//var element = document.getElementById(idOfUpdatedElement);
//element.innerHTML = whatToInsert;
//}
//
//function updateButton(buttonId, choiceId) {
//    var button = document.getElementById(buttonId);
//    button.setAttribute('onclick',"nextStep(" + choiceId + ")");
//}
//
//function buttonChange {
//    nextStep(1);
//}
//
////1. create the getItem, updateElement, and updateButton functions
//
////getItem: gets an item from a list by id
////requires the list and id of the desired element
//
////updateElement: updates the contents of an element on the screen
////requires the id of the div to update, and the new contents.

//updateButton: sets the onclick event for a button with the id of the item it chooses

//2. then create and use a function to initialize the game to step 1

//3. other needed functions
//restart: resets the game back to the beginning.

//happy ending: does whatever we want it to do when they end in a good place

//sad ending: does whatever we want it to do if they end at a bad place



//I worked with Blaine Akers on this assignment
