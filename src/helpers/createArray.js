//  comment: can you add a comment what this function does?
const twoDimensionalArray = (images, innerLengthArray) => {
  let temporaryArray = [];
  const array = images.map((el, idx) => {
    if (temporaryArray.length === innerLengthArray) temporaryArray = [];
    temporaryArray.push(el);
    if (!((idx + 1) % innerLengthArray) || images.length - 1 === idx)
      return temporaryArray;
  });
  // comment: do we need this filter?
  return array.filter((el) => el);
};

export default twoDimensionalArray;
