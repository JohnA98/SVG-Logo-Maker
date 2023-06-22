class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  // render Shape function
  renderShape() {
    return `<${this.shape} fill="${this.shapeColor}"/>`;
  }
  // render text function
  renderText() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
}
class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
}
class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
}

module.exports = {
  Shape,
  Circle,
  Triangle,
  Square
};
