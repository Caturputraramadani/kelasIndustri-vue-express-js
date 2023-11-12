const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 28 },
];

const youngPeople = people.filter((person) => person.age < 30);
console.log(youngPeople);



