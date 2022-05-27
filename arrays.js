//array
const friends = ["vihang", "yash", "Peter"];

console.log(friends, "friends");
console.log(friends.length);
console.log(friends[friends.length - 1]);

//we can mutate array
friends[2] = "yashvi";
//but we cannot replace it
//friends = ["vihang", "Nerdesh", "Bhide sir"];
const calAge = (birthYear) => 2030 - birthYear;

const vihang = [friends, "schtmen", "stephen"];
console.log(vihang);

let y = [1996, 2000, 2001, 2005, 2006, 2010];

console.log(calAge(y[0]));
console.log(calAge(y[y.length - 1]));

friends.push();
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
friends.unshift("yk");
console.log(friends);

friends.push(23);
console.log(friends.includes("yashvi"));
console.log(friends.includes("yash"));
console.log(friends.includes("23")); // false because includes does't do type coersion and stricly checks it
