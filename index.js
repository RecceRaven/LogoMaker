const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('svg.js'); // Or any other SVG library you prefer

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex):',
    }
  ]);
}

promptUser().then(answers => {
  createLogo(answers);
});


function createLogo({ text, textColor, shape, shapeColor }) {
    let svg = new SVG(document.documentElement);
  
    // Add shape based on user input
    switch (shape) {
      case 'circle':
        // add a circle
        break;
      case 'triangle':
        // add a triangle
        break;
      case 'square':
        // add a square
        break;
    }
  
    // Add text to SVG
    svg.text(text).fill(textColor);
  
    // Save the SVG to a file
    fs.writeFileSync('logo.svg', svg.svg());
    console.log('Generated logo.svg');
  }
  