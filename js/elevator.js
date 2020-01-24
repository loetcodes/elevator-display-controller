/*
Javascript to compute what number to display based on the user input. 
Uses a dictionary that stores True/False values for each number from 0-9 for each row item.

User selection is placed inside a queue. This queue is used to determine which floor is next.

*/

let numbers_dict = {
    "0": [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0]
    ],
    "1": [
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0]
    ],
    "2": [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0]
    ],
    "3": [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0]
    ],
    "4": [
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0]
    ],
    "5": [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0]
    ],
    "6": [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0]
    ],
    "7": [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0]
    ],
    "8": [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0]
    ],
    "9": [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0]
    ]
};


window.onload = function () {
    // When the window is loaded, start by counting from a random floor, then add the counting function to the user input panel
    let current_floor;
    let base_floor = "0", no_of_times = 1;
    let random_value = Math.floor(Math.random() * (10 - 4) + 4).toString();
    let no_pattern = createNumber(random_value, numbers_dict);

    changeDisplayNumber(no_pattern);
    function countDownFloor() {
        setTimeout(function() {
            if (no_of_times) {
                no_of_times--;
                countDownFloor();
            } else if (!no_of_times) {
                current_floor = countToFloor(parseInt(random_value), base_floor);
            }
        }, 500); // Keep this time large enough
    }
    
    countDownFloor();

    // Declaring public values used by the buttons panel. The curr_floor tracks the previously selected floor. Floors array holds a queue of selected floors.
    let input_value;
    let floors = [];
    let curr_floor = 0;

    // Event listener for the button control panel - change this to use wait fxn
    input_value = document.getElementById("userInput");
    input_value.addEventListener("click", function(e) {
        floors.push(parseInt(e.target.value));
        setTimeout(() => {
            if (floors.length) {
                console.log("Previous floors in the queue:", floors);
                let target_floor = floors.shift();
                curr_floor = countToFloor(curr_floor, target_floor.toString());
                console.log("Floors is now", floors);
            }
        }, 3000);
        
    });
}


// FUNCTION DECLARATIONS

function createNumber(value, lookup) {
    // Function that creates a pattern object for a given number. The function returns a pattern object representing values for each row.
    let pattern_array = lookup[value];
    let pattern_obj = {};
    for (let i = 0; i < pattern_array.length; i++) {
        pattern_obj["row-" + i] = pattern_array[i];
    }
    return pattern_obj;
}


function changeDisplayNumber(object) {
    // Function to loop over divs in a html element changing element classes according to row values.
    let row_sequences = object;
    for (let row_no in object) {
        let col_val, col_state;
        let row_values = row_sequences[row_no];
        let div_parent = document.getElementById(row_no),
            div_children = div_parent.getElementsByTagName("DIV");
        for (let i = 0; i < row_values.length; i++) {
            col_val = row_values[i];
            col_state = div_children[i];
            if (col_val && col_state.className == "bulb") {
                col_state.setAttribute("class", "bulb-on");
            } else if (!col_val && col_state.className != "bulb") {
                col_state.setAttribute("class", "bulb");
            }
        }
    }
}


function countToFloor(curr_floor, target_floor) {
    // Function to count and change the display value up to the selected number.
    // curr_floor is an int, target_floor is a string.
    let start = curr_floor;
    let end = target_floor;
    let number_of_times = Math.abs(parseInt(end) - start);

    function timedRepeat(number_val, value) {
        setTimeout(function() {
            let no_pattern = createNumber(number_val.toString(), numbers_dict);
            changeDisplayNumber(no_pattern);
            if (number_of_times) {
                number_of_times--;
                number_val += value;
                timedRepeat(number_val, value);
            }
        }, 800);
    }

    if (end > start) {
        timedRepeat(start, 1);
    } else if (end < start) {
        timedRepeat(start, -1);
    }
    start = parseInt(end); // New start value is the end value.
    return start;
}
