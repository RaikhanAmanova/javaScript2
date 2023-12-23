let array = [2, 3, 4, 5];
let array2 = new Array();

console.log(array[1]);
let months = ["january" ,"february"];
months.push('March');
console.log(months[2]);
months.unshift('December');
console.log(months[0]);
months.pop();
console.log(months);
months.shift();
console.log(months);
console.log(months.indexOf("february"));
console.log(months.includes("february"));
let friends = [ 'Abylai', 'Raikhan', 'Asyl'];
let person =  {

    name: 'almaz',
    age: 20,
    adress: 'Almaty, Abay str.',
    friends: friends
}
console.log(person.name);
console.log(person.friends);

months.push(person);
console.log(months);
