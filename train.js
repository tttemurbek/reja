/*A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

function atask(x, y) {
  let countLetter = 0;
  for (let i = 0; i < y.length; i++) {
    if ("x" === y[i]) {
      countLetter++;
    }
  }
  return countLetter;
}

let a = atask("x", "xxxxxxxxy");
console.log(a);

console.log("Jack Ma Maslahatlari");
const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashni boshlang", // 30-40
  "szi kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60+
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("err", "null");
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}
console.log("passed here 0");

maslahatBering(99, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("Javob:", data);
});

console.log("passed here 1");
