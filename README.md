# An Elevator Controller with Accompanying Display Screen
Simulates an elevator display controller that changes based on the floor number selected. 


<h2>Demo:</h2>

![elevator-display-controller](demo/30sec_elevator_display_controller_640px_screen.gif)


<h2>Case Scenario:</h2>

One is on the ground floor but the elevator is on the 7th floor. Pressing 0 calls the elevator from the 7th floor to the 0th floor. The display then changes counting down from 7 till 0, simulating how an elevators numbers change whilst running from floor to floor. Alternatively with the elevator on the 2nd floor and one on the 9th floor, the elevator moves from 2nd to 9th and the display screen adjusts as well.


<h2>Other Use Cases:</h2>

The display can be changed to display any letter, provided it is in the dictionary the controller uses when a button is pressed. To extend this to display other characters, you must:
  1. Create the sequence matrix for the letter you would like to display. This should be a sequence of 10 rows and 8 columns. In each row, a 0 corresponds to an off bulb while a 1 corresponds to an on bulb.
  2. Select a number string in the dictionary in the .js file and replace that matrix with the desired matrix. For example, if you want to display the letter T, replace the matrix string representing "9": [matrix] with the sequence matrix of on and off that will show the letter T. Replace the letter in between the HTML button for the corresponding 9 with the letter T.
  Note: When replacing values in the dictionary, only replace the matrix and not the property name. The property name is converted into an integer for counting up or down to floors
