const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('throws an error if the inputs are of wrong type', () => {
    expect(() => wrap(13, 'hello')).to.throw();
  });
  it("does not alter original input if specified line break is greater than that input's length", () => {
    expect(wrap('O valiant cousin! worthy gentleman!', 100)).to.equal(
      'O valiant cousin! worthy gentleman!'
    );
  });
  it('wraps text with line breaks inserted at just the right places to make sure that no line is longer than the column number', () => {
    expect(wrap('a b a c a b a', 1)).to.equal(
      'a b a c a b a'.split(' ').join('\n')
    );
  });
  it('breaks lines at word boundaries', () => {
    expect(wrap("out, out brief flame", 8)).to.equal('out, out\nbrief\nflame')
  })
});
