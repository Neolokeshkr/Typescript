// const message = 'Hello'
// message();
// const user = {
//     name: "Daniel",
//     age: 26,
//   };
//   user.location; // returns undefined
// console.log(Math.random)
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log("Hello ".concat(person, ", today was ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
/* tsc --noEmitOnError --target es2015 Basics.ts -> Outputs es2015 js file version, if no target is passeed it defaults to ES3 version */
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
