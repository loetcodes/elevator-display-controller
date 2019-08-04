/*
Javascript to compute what number to display based on the user input. 
Uses a dictionary that stores True/False values for each number from 0-9 for each row item
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
    //Onload function for the main body. Will count to a random floor, then count back to 0
    let initial_display = document.getElementById("main-body");
    initial_display.addEventListener("load", function() {
        let base_floor = "0";
        let random_value = Math.floor(Math.random() * (10 - 4) + 4).toString();
        let current_floor;

        let no_pattern = createNumber(random_value, numbers_dict);
        changeDisplayNumber(no_pattern);

        let no_of_times = 1;
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
    });


    // Declaring public values used by the buttons panel. Floor_value is an int that tracks the previously selected floor. At the start floor value is the base 0. Input_value is a string
    let input_value;
    let floor_value = 0;

    // Event listener for the button control panel
    input_value = document.getElementById("userInput");
    input_value.addEventListener("click", function(e) {
        floor_value = countToFloor(floor_value, e.target.value);
    });

}


// FUNCTION DECLARATIONS

// Function that creates a pattern object for a given number. The function returns a pattern object representing values for each row.
function createNumber(value, lookup) {
    let pattern_array = lookup[value];
    let pattern_obj = {};
    for (let i = 0; i < pattern_array.length; i++) {
        pattern_obj["row-" + i] = pattern_array[i];
    }
    return pattern_obj;
}

// Function to loop over divs in a html element changing element classes according to row values.
function changeDisplayNumber(object) {
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

//Function to count and change the display value up to the selected number.floor_val is an int floor_num is a string.
function countToFloor(floor_value, floor_num) {
    let start = floor_value;
    let end = floor_num;
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
    start = parseInt(end); //returns a new floor value where the last floor is the start floor
    return start;
}
