// const str = "javascript";
// const counts = [...str].reduce((acc, char) => {
//   acc[char] = (acc[char] || 0) + 1;
//   return acc;
// }, {});

// console.log(counts);

let str = "javascript";
let counts = {};

for (let char of str) {
  if (counts[char]) {
    counts[char]++;
  } else {
    counts[char] = 1;
  }
}

console.log(counts);