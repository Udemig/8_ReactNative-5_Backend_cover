/*
dizinin veri tipini tanımlarken dizinin içerisind eki elemanların tipini söyleriz.

*/

const students: string[] = ["ahmet", "mehmet", "ayşe", "10"];

// bütün dizi methodları dizinin tipini dikkate alır
students.push("ali");
students.push("40");
// students.push(true);
// students.push(40);

const ages: number[] = [12, 22, 34, 56];

const licensces: boolean[] = [true, false];

//normalde dizinin tek bir veri tipinden oluşmasını bekleriz.
// bazı durumalrda birden fazla farklı veri tipi oluşabilir.
// union type kullanarak "ya bu type ya bu type"

const teacher: (string | null | number | boolean)[] = [
  "uğur",
  null,
  12,
  "selin",
  50,
  null,
  true,
];
