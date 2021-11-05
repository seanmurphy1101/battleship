const { test, expect } = require('@jest/globals');
import '../factoryFiles/gameboard';


test('initialize ships returns arr of ships', () => {
    let ships = createGameBoard().initializeShips()
    for (let i=0; i<ships.length; ++i){
        expect(ships[i].size).toBe(i+1);
    }
});