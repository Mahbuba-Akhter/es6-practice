// kunu 1ta object/array theke 1ta/2ta element ke 1ta variable a rakar sortcut upay holo destructure
// object destructure
const person = {name:'Riya', age:17, phone:0990273876, gfName:'Ema Watson', address:'Dhaka' };
// const gfName = person.gfName;
const { phone, gfName } = person;  /* {object}*/
// const phone = person.phone

// console.log(gfName, phone);
// console.log(gfName, phone);
// console.log(gfName, phone);
// console.log(gfName, phone);

// array destructure

const friends = ['Salman Khan', 'Sakib Khan', 'Shahruk khan', 'Amir Khan', 'Arman Khan'];
const [first, ...restFriends] = friends;
console.log(restFriends);