const { createSvg, saveSvg } = require('./index');
const fs = require('fs');

jest.mock('fs');

describe('createSvg', () => {
  test('should create a correct SVG for circle shape', () => {
    const svg = createSvg('ABC', '#FFF', 'circle', '#000');
    expect(svg).toContain('<circle');
    expect(svg).toContain('fill="#000"');
    expect(svg).toContain('ABC');
  });

  test('should create a correct SVG for square shape', () => {
    const svg = createSvg('XYZ', 'blue', 'square', 'red');
    expect(svg).toContain('<rect');
    expect(svg).toContain('fill="red"');
    expect(svg).toContain('XYZ');
  });

  // Add more tests for different shapes and inputs
});

describe('saveSvg', () => {
  test('should call fs.writeFileSync with correct arguments', () => {
    const content = '<svg></svg>';
    saveSvg('test.svg', content);
    expect(fs.writeFileSync).toHaveBeenCalledWith('test.svg', content);
  });
});
