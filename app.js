const inquirer = require('inquirer');
const { createSvg, saveSvg } = require('./index');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Please enter up to three characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hex):',
    default: '#000000'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'square', 'triangle'],
    default: 'circle'
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hex):',
    default: '#FFFFFF'
  }
];

const main = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const svgContent = createSvg(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    saveSvg('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
