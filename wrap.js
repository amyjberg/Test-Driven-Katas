const wrap = (line, maxLen) => {
  if (typeof line !== 'string' || typeof maxLen !== 'number') {
    throw new TypeError(
      'inputs must be of type string and type number respectively'
    );
  }

  if (maxLen === 0 || maxLen > line.length) return line;
  let wrapped = line;
  for (let i = maxLen; i < line.length; i += maxLen) {
    let breakSpace = line.lastIndexOf(' ', i);
    wrapped =
      wrapped.slice(0, breakSpace) + '\n' + wrapped.slice(breakSpace + 1);
  }
  return wrapped;
};

module.exports = wrap;
