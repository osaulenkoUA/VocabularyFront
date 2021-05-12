 const twoDimensionalArray = (images, innerLengthArray) => {
  let temporaryArray = [];
  const array = images.map((el, idx) => {
    if (temporaryArray.length === innerLengthArray) temporaryArray = [];
    temporaryArray.push(el);
    if (!((idx + 1) % innerLengthArray) || images.length - 1 === idx)
      return temporaryArray;
  });
  return array.filter((el) => el);
};

export default twoDimensionalArray;