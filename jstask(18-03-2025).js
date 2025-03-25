//Question 1
let array = [1, 2, 2, 3, 4, 4, 5];
for (let i = 0; i < array.length; i++) {
  for (j = i + 1; j < array.length; j++) {
    if (array[i] == array[j]) {
      array.splice(j, 1);
    } else {
      j++;
    }
  }
}
console.log(array);

//Question 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = [];
for (let i = 0; i < numbers.length; i += 3) {
  result.push(numbers.slice(i, i + 3));
}
console.log(result);

//Question 3
const colors = ["red", "green", "blue", "yellow", "orange"];
colors.splice(1, 2, "purple", "pink");
console.log(colors);

//Question 4
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const intersection = array1.filter((element) => array2.includes(element));
console.log(intersection);

//Question 5
const nums = [1, 3, 5, 6];
const properties = {
  hasEven: nums.some((num) => num % 2 === 0),
  allPositive: nums.every((num) => num > 0),
};
console.log(properties);

//Question 6
const numbs = [1, 2, 3, 1, 4, 1, 5];
const sum = [];
numbs.forEach((item, index) => {
  if (item === 1) sum.push(index);
});
console.log(sum);

//Question 7
const chars = ["a", "b", "c", "d", "a", "e", "a"];
const indices = [];
chars.forEach((char, index) => {
  if (char === "a") indices.push(index);
});
const span = indices[indices.length - 1] - indices[0];
console.log(span);

//Question 8
const users = [
  { name: "Bob", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Charlie", age: 35 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);

//Queestion 9
const classData = [
  { name: "james", marks: 10 },
  { name: "Alan", marks: 8 },
];
const total = classData.reduce((sum, student) => sum + student.marks, 0);
console.log(total);

//Question 10
const class1 = [
  { name: "Alex", parentName: "Jack", age: 15, marks: 7, contact: 1234567898 },
  { name: "Mark", parentName: "Joey", age: 15, contact: 1234567898, marks: 4 },
  {
    name: "Trunks",
    parentName: "Alpha",
    age: 15,
    marks: 6,
    contact: 1234567898,
  },
];
const value = class1
  .filter((student) => student.marks > 5)
  .map((student) => ({ name: student.name, marks: student.marks }));
console.log(value);

//Question 11
const weatherData = [
  {
    date: "2025-03-01",
    temperature: 28,
    humidity: 65,
    precipitation: 0,
    windSpeed: 8,
    condition: "Sunny",
  },
  {
    date: "2025-03-02",
    temperature: 32,
    humidity: 70,
    precipitation: 0,
    windSpeed: 5,
    condition: "Sunny",
  },
  {
    date: "2025-03-03",
    temperature: 30,
    humidity: 75,
    precipitation: 0.5,
    windSpeed: 12,
    condition: "Partly Cloudy",
  },
  {
    date: "2025-03-04",
    temperature: 25,
    humidity: 80,
    precipitation: 2.1,
    windSpeed: 15,
    condition: "Rainy",
  },
  {
    date: "2025-03-05",
    temperature: 22,
    humidity: 85,
    precipitation: 1.5,
    windSpeed: 10,
    condition: "Rainy",
  },
  {
    date: "2025-03-06",
    temperature: 26,
    humidity: 75,
    precipitation: 0,
    windSpeed: 7,
    condition: "Cloudy",
  },
  {
    date: "2025-03-07",
    temperature: 29,
    humidity: 65,
    precipitation: 0,
    windSpeed: 6,
    condition: "Sunny",
  },
];
const fahrenheitData = weatherData.map((data) => ({
  ...data,
  temperature: (data.temperature * 9) / 5 + 32,
}));
console.log(fahrenheitData);

const rainyDays = weatherData.filter((day) => day.precipitation > 0);
console.log(rainyDays);

const averageTemperature =
  weatherData.reduce((total, day) => total + day.temperature, 0) /
  weatherData.length;
console.log(averageTemperature);

const temps=weatherData.map(data=>data.temperature);
const highest =Math.max(...temps);
const lowest=Math.min(...temps);
console.log({highest,lowest});

const sunnyDays = weatherData.filter(day => day.condition === 'Sunny');
console.log(sunnyDays);