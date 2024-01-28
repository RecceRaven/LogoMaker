const fs = require('fs');

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

const saveSvg = (filename, content) => {
  fs.writeFileSync(filename, content);
};

module.exports = { createSvg, saveSvg };
