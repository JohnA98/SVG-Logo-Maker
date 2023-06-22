//npm packages to use
const inquirer = require('inquirer');
const fs = require("fs");
//exporting classes from shapes file
const { Shape, Circle, Triangle, Square } = require("./lib/shapes.js");


// array of questions for inquirer
const questions = [
  {
    type: "input",
    message: "Please input text for your logo. (no more than 3 characters)",
    name: "text",
  },
  {
    type: "input",
    message:
      "Please input what color you want the text to be. (Color name and hexadecimal is ok)",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please choose your shape from the list of options.",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message:
      "Please input what color you want the shape to be. (Color name and hexadecimal is ok)",
    name: "shapeColor",
  },

];

inquirer.prompt(questions)
  .then((answers) => {
    const {text, textColor, shape, shapeColor } = answers

    switch(shape) {
      case "Circle":
        const circleSVG = 'circle cx="150" cy="100" r="80"';
        const circle = new Circle(text, textColor,circleSVG, shapeColor);
        return circle;
        break;

      case "Triangle":
        const triangleSVG = 'polygon points="150, 18 244, 182 56, 182"';
        const triangle = new Triangle(text, textColor, triangleSVG, shapeColor);
        return triangle;
        break;

      case "Square":
        const squareSVG = 'rect width="100%" height="100%"';
        const square = new Square(text, textColor, squareSVG, shapeColor);
        return square;
        break;
    }

  })
  .then((result) => {
    const renderedShape = result.renderShape();
    const renderedText = result.renderText();
    const fullSVGRender = `
      <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      ${renderedShape}
      ${renderedText}
      </svg>`;
    fs.writeFile(`./examples/${result.text}.svg`, fullSVGRender, (error) =>
      error ? console.log(error) : console.log(`Success! Generated ${result.text}.svg`)
    );
  });
  