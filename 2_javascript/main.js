import { leaderTable as table } from "./constans.js";

// console.log(table);

import apıkey from "./constans.js";
// console.log(apıkey);

export const deneme = 10;
export const deneme1 = 50;
export const deneme2 = 60;
export const deneme3 = 70;

// console.log("selamla");

//1)DEĞİŞKENLER
//Veri depolamak istediğimizde kullanıyoruz.

//*var :
//*eski süürmlerde kullanılan değişken tanımlama yöntemi.

var x = 40;
x = 50;
// console.log(x);

//*let : es6 ile yazılama dahil oldu.
let surname = "yıldız";
surname = "kaya";
// console.log(surname);

//*const :es6 , sonrasında değiştirlilemez,
//*obje ve nesne tanımlandığında kendisi değiştirilemese de nesnenin içeriği değiştirilebilir.

// const name = "selin";
// name = "sli";

const user = {
  name: "selin",
  surname: "atmaca",
};

// console.log(user.name);

user.name = "ali";

// console.log(user.name);

const users = ["ali", "ayşe"];

// console.log(users);

users[0] = "mehmet";

// console.log(users);

//! JAVASCRIPTTE VERİ TÜRLERİ

//String

let statuss = "react";

const text = "selam bugün 'nasıl' geçiyor ";
const text1 = 'gayet güzel hava "çok" güneşli';
const text2 = `
-${statuss} öğrendinmi ?
-evet öğrendim. 
`; // template literals >backtick

// console.log(text2);

//Number
const sayi = 4;
const sayi1 = 4.1;

// console.log(sayi + sayi1);

//Boolean

const is_premium = true; //1
const is_student = false; //0

// Object(nesne)
//birden çok özelliği ve değeri içeren karmaşık veri yapılarıdır.
// { } içerisinde anahtar-değer çiftleriyle kullanıyourz.

var person = {
  name: "zeynep",
  age: 40,
  has_licence: false,
};

// Array ( dizi)
//sıralı ögelerin listesini temsil eder.

var colors = ["kırmızı", 59, true, { name: "ad" }];
// console.log(colors);
//console.log(typeof colors);

// undefined (tanımsız)
var u;
// console.log(u);

// null
var student = {
  name: "Ali",
  surname: "kaya",
  hobby: null,
};
// console.log(student);

// console.log(student.hobby);

// console.log(student.gender);

// FUNCTIONS (FONKSİYONLAR)

// belirli bir görev, yerine getiren veya sonuç döndüren adlandırılmış ve yeniden kullanılabilir kod bloklarıdır.

/*
-Fonskiyonun Adı : İşlevin ne yaptığını açıklayan isim.
-Fonksiyonun Gövdesi: gerçekleştireceği işlevi içeren kod bloğu
-Parametreler: fonk.çalışması için dışarıdan gönderilen değer.
-Dönüş Değer(return): ürettiği sonucu fonk.çağrıldığı yere gönderir.
*/

function toplama() {
  const sonuc = 80 + 60;
  console.log(sonuc);
}
toplama();

function toplama1(a, b) {
  const sonuc1 = a + b;
  // console.log(sonuc1);
}

toplama1(50, 100);
toplama1(86489, 98989);

function toplama2(a, b) {
  const sonuc2 = a + b;
  return sonuc2;
}

const sum1 = toplama2(50, 100);
const sum2 = toplama2(8798789, 898900);

document.write(sum2);
// console.log(sum1);

//* Arrow Function(ok fonksiyonu)

function test(name) {
  return "selam" + name;
}

//arrow function ()=>{}
// eğer ki tek parametre varsa paranteze gerek yok
//return edilecek veri tek satırdaysa doğrudan yazılabilir.
const test2 = (name) => "selam" + name;

//* returnden önce hesaplamalar yapılacaksa ()=>{}
const test3 = () => {
  let c = a + b;
  return c;
};

//* return edilecek veri çok satırlıysa ()=>()
const test4 = () =>
  `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JAVASCRIPT</title>
  </head>`;

//!DİZİLER
console.table(table);

// push :dizinin sonuhna ekleme
table.push({
  id: "43251",
  name: "selin",
  point: 2500,
  isActive: false,
});

console.table(table);

//unshift :dizinin başına ekler

table.unshift({
  id: "43251",
  name: "zeynep",
  point: 9000,
  isActive: false,
});

console.table(table);

// shift():dizinin başındaki elkamnı çıkar

const removedItem = table.shift();
console.table(removedItem);
console.table(table);

//pop():dizinin sonundaki elkamnı çıkar
const removedItem1 = table.pop();
console.table(removedItem1);
console.table(table);

//find

const founUser = table.find((user) => user.id === "12123");

console.table("bulunud", founUser);

//map

const decide = (user) => ({
  ...user, //spread operatörü
  point: user.point + 200,
});

const newTable = table.map(decide);

console.table(table);
console.table(newTable);
