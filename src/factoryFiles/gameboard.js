import ship from '/factoryFiles/ship';

function createGameBoard(){
    board = {
        initializeShips: () => {
            let ships = [];
            for (let i=1; i<5; ++i){
                ships.push(ship(i));
            }
            return ships;
        }
    }
    return board;
}
createGameBoard().initializeShips();

module.exports = createGameBoard;