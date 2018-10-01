const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if empty array was provided', () => {
    expect((twoSum([], 10).length)).to.equal(0);
  });

});
