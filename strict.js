"use strict";
// Eliminates some JavaScript silent errors by changing them to throw errors.
// Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// Prohibits some syntax likely to be defined in future versions of ECMAScript.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
// if = '20'
