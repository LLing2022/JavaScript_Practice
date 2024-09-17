## Description

A Web game coded in JavaScript HTML and CSS

## How to Play

Game Elements:
Two Players: Player 1 and Player 2. The active player alternates between the two players during the game.
Dice Roll: Players roll a virtual die (random number between 1 and 6) to collect points.
Buttons:
Roll Dice Button: This button allows players to roll the dice and accumulate points.
Hold Button: This button allows players to hold their current score, adding it to their total score.
New Game Button: Resets the game and allows players to start over.
Game Logic:
Starting Conditions:

The game initializes with both players' scores set to 0, no dice shown, and Player 1 as the active player.
A state variable playing is set to true to indicate that the game is ongoing.
Rolling the Dice:

When the active player clicks the Roll Dice button, a random number between 1 and 6 is generated.
If the dice roll is not 1, the value of the roll is added to the player's current score.
If the dice roll is 1, the current score is lost, and the other player becomes the active player.
Holding the Score:

When a player clicks the Hold button, the player's current score is added to their total score.
The game then checks if the player's total score has reached or exceeded 20 points:
If so, the game ends, and that player is declared the winner.
If not, the other player becomes the active player.
Winning:

If a player’s score reaches or exceeds 20 points, the game stops, a congratulatory message is shown, and the winner is highlighted.
New Game:

Clicking the New Game button resets the game to its initial state, allowing players to start fresh.
