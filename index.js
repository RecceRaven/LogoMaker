const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));

const createSvg = (text, textColor, shape, shapeColor) => {
  const shapes = {
    circle: `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`,
    square: `<rect x="50" y="20" width="200" height="200" fill="${shapeColor}" />`,
    triangle: `<polygon points="150,10 250,190 50,190" fill="${shapeColor}" />`
  };

  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapes[shape]}
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
};

const main = async () => {
  const text = await askQuestion('Enter up to three characters for the logo: ');
  const textColor = await askQuestion('Enter the text color (keyword or hex): ');
  const shape = await askQuestion('Choose a shape (circle, triangle, square): ');
  const shapeColor = await askQuestion('Enter the shape color (keyword or hex): ');
  
  const svgContent = createSvg(text, textColor, shape, shapeColor);
  fs.writeFileSync('logo.svg', svgContent);
  
  console.log('Generated logo.svg');
  rl.close();
};

main();
