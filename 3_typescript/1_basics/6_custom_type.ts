// type aliases
//custom type

// custom type kullanmadan obje tipi tanımlama

let özgür: {
  name: string;
  age: number;
} = {
  name: "ali",
  age: 50,
};

let selin: {
  name: string;
  age: number;
} = {
  name: "mehmet",
  age: 30,
};

let secil: {
  name: string;
  age: number;
} = {
  name: "fatih",
  age: 10,
};

// custom type kullanak

type UserType = {
  name: string;
  age: number;
};

const zeynep: UserType = {
  name: "ayşe",
  age: 12,
};

const fırat: UserType = {
  name: "selin",
  age: 5,
};

const fırat1: UserType = {
  name: "selin",
  age: 5,
};
