const vihangkale = {
  firstName: "Vihang",
  lastName: "Kale",
  age: 2020 - 2010,
  job: "teacher",
  friends: ["yash", "akash", "yoo"],
  birthYear: 1991,
  hasDriversLicense: true,
  calAge: function () {
    console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  //challeenge
  //"vihangkale is 46 yr old teacher and has a driver's license"
  getSummary: function () {
    return `${this.firstName} is a ${this.calAge()} --year old ${
      vihangkale.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(vihangkale.firstName);
console.log(vihangkale["firstName"]);

const nameKey = "Name";
console.log(vihangkale["first" + nameKey]);
console.log(vihangkale["last" + nameKey]);

const interestedIn = prompt("which value?");

console.log(vihangkale[interestedIn]);
console.log(vihangkale.age);

console.log(vihangkale.getSummary());
