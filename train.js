/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi

@MITASK

*/

function findDoublers(x) {
  let newString = x.split("").sort().join("");

  for (let i = 0; i < x.length; i++) {
    if (newString[i] === newString[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(findDoublers("hello"));

// E task

/* E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"

@MITASK */

// function getReverse(x) {
//   return x.split("").reverse().join("");
// }
// console.log(getReverse("hello"));

// D task

// const { checkCollectionName } = require("mongodb/lib/utils");

// function checkContent(x, y) {
//   let first = x.split("").sort().join("");
//   let second = y.split("").sort().join("");
//   if (first === second) {
//     return true;
//   } else {
//     console.log("Please try again");
//   }
// }

// let result = checkContent("mit", "tim");
// console.log(result);

// C task

// const moment = require("moment");

// class Shop {
//   // state
//   non;
//   ramen;
//   cyder;

//   constructor(non, ramen, cyder) {
//     this.non = non;
//     this.ramen = ramen;
//     this.cyder = cyder;
//   }

//   qoldiq() {
//     console.log(
//       `${moment().format("LT")}da ${this.non} non, ${this.ramen} ramen, ${
//         this.cyder
//       } cyder bor`
//     );
//   }

//   sotish(addItem, amountItem) {
//     if (addItem === "non") {
//       this.non -= amountItem;
//     } else if (addItem === "ramen") {
//       this.ramen -= amountItem;
//     } else if (addItem === "cyder") {
//       this.cyder -= amountItem;
//     }
//   }

//   qabul(receiveItem, amountItem) {
//     if (receiveItem === "non") {
//       this.non += amountItem;
//     } else if (receiveItem === "ramen") {
//       this.ramen += amountItem;
//     } else if (receiveItem === "cyder") {
//       this.cyder += amountItem;
//     }
//   }
// }

// const shop1 = new Shop(100, 100, 100);

// shop1.sotish('non', 3);
// shop1.qabul('cyder', 4);
// shop1.qoldiq()

// B task

// function countDigits(x) {
//   let count = 0;

//   for (let i = 0; i < x.length; i++) {
//     // if (x[i] >= "0" && x[i] <= "9") {
//     //   count++;
//     // }

//     if (x[i] >= 0 && x[i] <= 9) {
//       count++;
//     }
//   }

//   return count;
// }

// const count = countDigits("a1sdaseqwr4wer6e565wqedsz");
// console.log(count);

/*A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

// const { promiseImpl, resolveInclude } = require("ejs");

// function atask(x, y) {
//   let countLetter = 0;
//   for (let i = 0; i < y.length; i++) {
//     if ("x" === y[i]) {
//       countLetter++;
//     }
//   }
//   return countLetter;
// }

// let result = atask("x", "xxxxxxxxy");
// console.log("Result:", result);

// console.log("Jack Ma Maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashni boshlang", // 30-40
//   "szi kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60+
// ];

// 21-dars
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("err", "null");
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");

// maslahatBering(99, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("Javob:", data);
// });

// console.log("passed here 1");

// 22-dars
// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 10000);
//     });
//   }
// }

//then/catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("Javob", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
// console.log("Passed here 1");
// async - sinkron operationlar toliq amalga oshib bolgannan keyin async islep baslaydi
// sonin ushin singlre threadimizdi bant qilmaydi

//async/await
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log("javob:", javob);
//   javob = await maslahatBering(70);
//   console.log("javob:", javob);
//   javob = await maslahatBering(30);
//   console.log("javob:", javob);
//   javob = await maslahatBering(40);
//   console.log("javob:", javob);
//   javob = await maslahatBering(50);
//   console.log("javob:", javob);
//   javob = await maslahatBering(60);
//   console.log("javob:", javob);
// }

// run();
