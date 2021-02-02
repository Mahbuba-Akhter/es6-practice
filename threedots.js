const age = [24, 39, 53, 34];
const age1 = [45, 35, 65, 76];
const age2 = [44, 56, 34, 67]
const allAges = age.concat(age1).concat ([5]).concat(age2);
const allAges2 = [...age, ...age1, 5, ...age2]
console.log(allAges2);

const business = 450;
const minister = 350;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
const takaPoysa = [450, 350, 250];
const maximum = Math.max(...takaPoysa);
console.log(maximum);