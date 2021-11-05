
const ship = (size) => {
    thisShip =  {
        size: size,
        positions: [],
        setPositions: ([x, y], isVertical) => {
            for (let i=0; i<thisShip.size; ++i){
                if (isVertical){
                    thisShip.positions.push({pos: [x, y+i], isHit: false});
                }
                else {
                    thisShip.positions.push({pos: [x+i, y], isHit: false});
                }
            }
            return thisShip;
        },
        isSunk: () => thisShip.positions.filter(e => !e.isHit).length === 0,
        hit: (pos) => {
            let coords = searchCoords(thisShip.positions, pos);
            if (coords.length===0){
                return 'miss';
            }
            else {
                coords.isHit = true;
                if (thisShip.isSunk()){
                    return 'ship sunk';
                }
                else {
                    return 'hit';
                }
            }
        }
    }
    return thisShip;
}
function searchCoords(arr, [x,y]){
    for (let i=0; i<arr.length; ++i){
        let [x2, y2] = arr[i].pos;
        if (x===x2 && y===y2){
            return arr[i];
        }
    }
    return [];
}

module.exports = ship;