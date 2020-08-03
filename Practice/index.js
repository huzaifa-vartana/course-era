// // // // console.log("hi");
// // // // function forloop() {
// // // //   for (let index = 0; index < 5; index++) {
// // // //     console.log(`${index}`);
// // // //   }
// // // // }

// // // // forloop();
// // // // let i = 0;
// // // // function whileloop() {
// // // //   while (i < 5) {
// // // //     console.log(`${i}`);
// // // //     i++;
// // // //   }
// // // // }
// // // // console.log("While Loop Starting\n");
// // // // whileloop();
// // // // console.log("For-each Loop Starting\n");
// // // // let array = [0, 1, 2, "hi", 2, 5];
// // // // function for_each() {
// // // //   array.forEach((element) => {
// // // //     console.log(element);
// // // //   });
// // // // }
// // // // for_each();
// // // // console.log("\n");
// // // let huzaifa = {
// // //   name: "huzaifa",
// // //   age: "21",
// // //   uni: "giki",
// // // };
// // // // var person = {
// // // //     firstName: "John",
// // // //     lastName: "Doe",
// // // //     age: 50,
// // // //     eyeColor: "blue"
// // // //   };
// // // // for (element in huzaifa) {
// // // //   console.log(element);
// // // // }
// // // // console.log(huzaifa);

// // // // for (let index = 0; index < huzaifa.length; index++) {
// // // //   console.log(huzaifa[index]);
// // // // }
// // // for (const key in huzaifa) {
// // //   if (huzaifa.hasOwnProperty(key)) {
// // //     console.log(huzaifa[key]);
// // //   }
// // // }
// // // // huzaifa.forEach(element => {
// // // //     console.log(element);
// // // // });
// // // for (iterator in huzaifa) {
// // //   console.log(huzaifa[iterator]);
// // // }
// // // console.log()

// // let p = document.getElementById("para");
// // let h = document.getElementById("heading");
// // let newheading = document.getElementById("div1");
// // let h2 = '<h2 id="new">New Heading</h2>';
// // let p1 =
// //   '<p id="new1">dnajsndajsdnasjdbasjdbashdbasdbashdbashdbashdbashbd</hp>';
// // newheading.innerHTML += h2;
// // newheading.innerHTML += p1;
// // newheading1 = document.getElementById("new");
// // newpara = document.getElementById("new1");
// // newheading1.style.display = "none";
// // newpara.style.display = "none";
// // p.style.display = "none";
// // console.log(newheading1);

// // console.log(newheading);
// // function hide() {
// //   if (p.style.display == "none") {
// //     p.style.display = "block";
// //     h.style.color = "red";
// //     h.innerHTML = "Shown";
// //     newheading.style.display = "block";
// //     newheading1.style.display = "block";
// //     newpara.style.display = "block";
// //   } else {
// //     p.style.display = "none";
// //     h.innerHTML = "Hidden";
// //     newheading1.style.display = "none";
// //     h.style.color = "blue";
// //     newheading.style.display = "none";
// //     newheading1.style.display = "none";
// //     newpara.style.display = "none";
// //   }

// //   console.log("Done");
// // }

// // setInterval(hide,1000);
// // // hide();

// setInterval(() => {  document.getElementById("time").innerHTML = new Date();
// }, 1000);

// let
// console.log('HI');
let obj = {
  name: ["huzaifa", "mohaimin"],
  age: [21, 17],
  speak() {
    for (let index = 0; index < this.name.length; index++) {
      console.log(this.name[index]);
    }
  }
};

obj.speak();
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log( obj[key]);
        
    }
}