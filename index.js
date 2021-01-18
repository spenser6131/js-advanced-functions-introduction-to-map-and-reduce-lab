function mapToNegativize(sourceArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i] * -1)
  };
  return result;
}

function mapToNoChange(sourceArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i])
  };
  return result;
}

function mapToDouble(sourceArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i] * 2)
  };
  return result;
}

function mapToSquare(sourceArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i] ** 2)
  };
  return result;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint;
  for (let i = 0; i < sourceArray.length; i++){
    total += sourceArray[i]
  };
  return total;
}

function reduceToAllTrue(sourceArray) {
  let result = true;
  if (sourceArray.some(element => element == false)) {
    result = false;
  }
  return result;
}

function reduceToAnyTrue(sourceArray) {
  let result = false;
  if (sourceArray.some(element => element == true)) {
    result = true;
  }
  return result;
}
