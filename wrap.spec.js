const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns the same string if the column length is longer than the string', () => {
    expect(wrap("Maggie", 10)).to.equal("Maggie");
  });

  it('Returns a two-line statement if string is longer than max column length', () => {
    expect(wrap("Maggie", 3)).to.equal('Mag\ngie');
  });

  it('Returns a multi-line statement if string is longer than max column length', () => {
    expect(wrap("The cow jumped over the moon.", 3)).to.equal('The\n co\nw j\nump\ned \nove\nr t\nhe \nmoo\nn.');
  });

});
