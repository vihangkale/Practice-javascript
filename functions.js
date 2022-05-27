function logger() {
  console.log("My name is Vihang");
}
//calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 0));

//arrow functions
const calAge3 = (birthYear) => 2030 - birthYear;
calAge3();
console.log(calAge3());
