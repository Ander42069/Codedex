// Game class
class Game {
    constructor() {
        this.players = [];
        this.currentPlayer = null;
        this.gameOver = false;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    start() {
        // Game initialization logic
        console.log("Game started!");
        this.currentPlayer = this.players[0];
    }

    end() {
        // Game ending logic
        console.log("Game ended!");
        this.gameOver = true;
    }
}

// Player class
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    play() {
        // Player's turn logic
        console.log(`${this.name}'s turn`);
        // Add your game logic here
    }
}

// Create game instance
const game = new Game();

// Create players
const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

// Add players to the game
game.addPlayer(player1);
game.addPlayer(player2);

// Start the game
game.start();
