// console.log("hi");
// function forloop() {
//   for (let index = 0; index < 5; index++) {
//     console.log(`${index}`);
//   }
// }

// forloop();
// let i = 0;
// function whileloop() {
//   while (i < 5) {
//     console.log(`${i}`);
//     i++;
//   }
// }
// console.log("While Loop Starting\n");
// whileloop();
// console.log("For-each Loop Starting\n");
// let array = [0, 1, 2, "hi", 2, 5];
// function for_each() {
//   array.forEach((element) => {
//     console.log(element);
//   });
// }
// for_each();
// console.log("\n");
let huzaifa = {
  name: "huzaifa",
  age: "21",
  uni: "giki",
};
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
// for (element in huzaifa) {
//   console.log(element);
// }
// console.log(huzaifa);

// for (let index = 0; index < huzaifa.length; index++) {
//   console.log(huzaifa[index]);
// }
for (const key in huzaifa) {
  if (huzaifa.hasOwnProperty(key)) {
    console.log(huzaifa[key]);
  }
}
// huzaifa.forEach(element => {
//     console.log(element);
// });
for ( iterator in huzaifa) {
    console.log(huzaifa[iterator]);
}