/*
* Fonksiyonların tipini tanımlamak dediğimiz zaman
* fonksiyonların parametrelerinin ve return değerlerinin tipini 
* tanımlamaktan bahsediyoruz.

*/

function hesaplama(a: number, b: number): string {
  return "Sonucunuz:" + a + b;
}

hesaplama(12, 24);

// Örnek

// Kişinin bulunduğu konumu ve oranın hava derecesini parametre olarak alıp
//"Merhaba, ..... konumunda ki hava derecesi .... derece" metnini döndüren fonk yazınız.

const useLoc = (loc: string, degree: number): string => {
  return `Merhaba, ${loc} konumundaki hava derecesi ${degree} derece `;
};

useLoc("türkiye", 30);

//void
//her fonksiyon bir değer return etmez
//ve return değeri olmayan fonksiyonların
//return type void veririz.

const selamal = (): void => {
  console.log("selam");
};
