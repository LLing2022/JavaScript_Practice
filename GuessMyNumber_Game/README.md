## Initialization

A random secret number between 1 and 20 is generated. The player starts with a score of 20, and a high score is tracked.

## Guessing Mechanism:

When the Check button is clicked, the player's guess (input from a text field) is compared to the secret number.
If no number is entered, a message prompts the user to insert a number.
If the guess matches the secret number, the player wins, and the game displays a congratulatory message. The background color changes to indicate success, and the number's width is increased. If the score is higher than the previous high score, it is updated.
If the guess is incorrect, the game provides feedback indicating whether the guess was too high or too low. The score is decremented, and the new score is displayed. If the score drops to 0, the player loses the game, and a loss message is shown.

## Restarting the Game:

Clicking the Again button resets the game. The score is set back to 20, a new secret number is generated, and the user interface elements (message, score, and guess input) are reset. The background color and number width are also restored to their initial states.
