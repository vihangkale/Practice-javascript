console.log(typeof NaN)
console.log(String(23),23)

// type coersion 
console.log("type coersion");
console.log("I am " + 23 + ' years old');
console.log("23"/"2");

let n = "1" + 1;
n = n - 1;

console.log(n);

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean({}))

const money = 000;

if(money) {
    console.log("Don't spend it all")
} else {
    console.log("You should get a job!")
}
let height;
 if(height) {
    console.log("yah! hieght is defined")
 } else {
    console.log("height undefined")
 }