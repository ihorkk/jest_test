const {getRectanglePerimeter, getRectangleArea, getRectangleInfo} = require('../js/rectangle.js');


test('should calculate rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(5, 10);
    expect(perimeter).toBe(30);
});

test('should calculate rectangle perimeter with decimals', () => {
    const perimeter_float = getRectanglePerimeter(5.5, 10.5);
    expect(perimeter_float).toBe(32);
});

test('should calculate rectangle area', () => {
    const area = getRectangleArea(5, 10);
    expect(area).toBe(50);
});

test('should calculate rectangle area with decimals', () => {
    const area_float = getRectangleArea(5.5, 10.5);
    expect(area_float).toBe(57.75);
});

test('should output rectangle perimeter and area', () => {
    const info = jest.spyOn(console, 'log');
    getRectangleInfo(5, 10);
    expect(info).toHaveBeenCalledWith(`The perimeter of a rectangle is 30 and the area is 50`);
});

test('should output decimal perimeter and decimal area of a rectangle', () => {
    const info_decimal = jest.spyOn(console, 'log');
    getRectangleInfo(5.55, 10.55);
    expect(info_decimal).toHaveBeenCalledWith(`The perimeter of a rectangle is 32.2 and the area is 58.5525`);
});