const day = "monday"


switch(day) {

    case "monday": // strict comparison
        console.log("it's a monday")
    break;
    case "tuesday":
    console.log("tuesday");
    break;

    case "thursday":
    console.log("thursday")
    break;

    default : 
    console.log("not a valid day")
}

if(day === "monday") {
    console.log("mondayyyyy");
} else if(day === "monday") {
    console.log("2nd mondayyy");
}