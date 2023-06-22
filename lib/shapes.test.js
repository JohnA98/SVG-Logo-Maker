const { Circle, Triangle, Square } = require("../lib/shapes.js");

// Tests that the circle and text is rendered separately
describe("Circle checks", () => {
  it("check the text in the circle", () => {
    const text = "abc";
    const textColor = "red";
    const circle = new Circle(text, textColor, "", "");
    expect(circle.renderText()).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text>'
    );
  });
  // tests that the color of the circle is rendered properly
  it("checks the color of the circle", () => {
    const shape = 'circle cx="50" cy="50" r="40"'
    const shapeColor = "blue";
    const circle = new Circle("", "", shape, shapeColor);
    expect(circle.renderShape()).toEqual(
      '<circle cx="50" cy="50" r="40" fill="blue"/>'
    );
  });
});

// Tests that the triangle and text is rendered separately
describe("Triange checks", () => {
  it("check the text in the triangle", () => {
    const text = "def";
    const textColor = "yellow";
    const triangle = new Triangle(text, textColor, "", "");
    expect(triangle.renderText()).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">def</text>'
    );
  });
  // tests that the color of the triangle is rendered properly
  it("checks the color of the triangle", () => {
    const shape = 'polygon points="150, 18 244, 182 56, 182"';
    const shapeColor = "blue";
    const triangle = new Triangle("", "", shape, shapeColor);
    expect(triangle.renderShape()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
    );
  });
});

describe("Square checks", () => {
  // Tests that the square
  it("checks the text in the square", () => {
    const text = "cp3";
    const textColor = "purple";
    const square = new Square(text, textColor, "", "");
    expect(square.renderText()).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">cp3</text>'
    );
  });
  // tests that the color of the square is rendered properly
  it("checks the color of the square", () => {
    const shape = 'rect width="100%" height="100%"';const shapeColor = "magenta";
    const square = new Square("", "", shape, shapeColor);
    expect(square.renderShape()).toEqual(
      '<rect width="100%" height="100%" fill="magenta"/>'
    );
  });
});