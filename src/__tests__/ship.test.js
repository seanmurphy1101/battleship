const { test, expect } = require("@jest/globals");
import "../factoryFiles/ship";

test('test initialization', () => {
    expect(ship(3).size).toBe(3);
});

test('test setPositions', () => {
    expect(ship(3).setPositions([1,1], true).positions).toEqual([{pos: [1,1], isHit: false}, {pos: [1,2], isHit: false}, {pos: [1,3], isHit: false}]);
});

test('isSunk works properly identfies sunk', () => {
    expect(2).toBe(2);
});

test('isHit misses', () => {
    let boat = ship(3);
    boat.setPositions([1,1], true);
    expect(boat.hit([0,0])).toBe('miss');
});

test('isHit hits', () => {
    let boat = ship(3);
    boat.setPositions([1,1], true);
    expect(boat.hit([1,2])).toBe('hit');
});

test('isHit sinks', () => {
    let boat = ship(3);
    boat.setPositions([1,1], true);
    boat.hit([1,1]);
    boat.hit([1,2]);
    expect(boat.hit([1,3])).toBe('ship sunk');
});

