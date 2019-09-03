const addFunction = function() {
  const properties = Object.keys(arguments);
  let totalAdd = 0;
  properties.forEach(property => {
    totalAdd += arguments[property];
  });
  return totalAdd;
};

console.log(addFunction(78, 45, 64, 90, 2));
console.log(addFunction(33, 18, 30, 5, 111, 63, 55, 13, 84, 34));