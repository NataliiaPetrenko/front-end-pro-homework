var arr = [
    {name: 'Vasya', age: 24}, 
    {name: 'Petya', age: 12}, 
    {name: 'Fedya', age: 6},
    {name: 'Ann', age: 18},
    {name: 'Nastya', age: 40}
]

function sortAge (a, b) {
    return a.age - b.age;
}

arr.sort(sortAge);

console.log(arr);

