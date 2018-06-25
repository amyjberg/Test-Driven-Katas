const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('toSum function', () => {
  it('throws an error if the first input is not an input array, or if it has length 0, or if the second argument is NaN', ()=>{
    expect( () => twoSum(5,5) ).to.throw();
    expect( ()=>twoSum([], 5) ).to.throw();
    expect( ()=>twoSum([2, 3], [3]) ).to.throw();
  })


})
