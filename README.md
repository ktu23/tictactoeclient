
1. Why does it console log 1 when I first click?
   1. done
2. Why doesn't it show as win when I choose other blocks? 
3. How to first check that a box/space is empty when a user clicks on it?
   1. done
4. "If they choose a valid space - add their token to the HTML/CSS Board and the game cells array" - how to do this?
5. When I put all the if else statements together, something goes wrong?
   1. done
6. How to hide the game from main page?
7. When clicking new game - how to remove the 'signed in successfully' message and only show welcome to the game?
8. How to display a message for user when game is over - win or draw?
   1. done
9.  How to freeze the game board after (not letting the user to be able to add an X or O to any spaces after the game is over) -- done
    1.  Right now it still lets you keep clicking/changing the board
    2.  How to freeze the game board?
    3.  Also to not be able to allow it to change from X->O or O->X before/after game?
10. How to reset the board after someone wins or ties? 
    1.  show a new game button first 
    2.  then reset 
    3.  show sign out after game is over, so show both new game button and reset 
11. Github issues - commited, merged and reverted - how to fix? Is this an issue?


----

  1.  How to reset the board after someone wins or ties? 
    1.  show a new game button first 
    2.  then reset 
    3.  show sign out after game is over, so show both new game button and reset 

2. proper winner is displayed

win should be a variable 

there should be a variable that i set somwehre in my events.js document and it should be false first

it can be let winState = false
when check winner and winner = true
set winstate = true 
