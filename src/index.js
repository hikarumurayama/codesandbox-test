/* map*/
const nameArr = ["田中", "山田", "大田"];
//nameArr.map((name) => console.log(name));

/* filter*/
const numArr = [1, 2, 3, 4, 5];
const oddNums = numArr.filter((num) => {
  return num % 2 === 1;
});
//console.log(oddNums)

/**index */
const member = ["taro", "takashi", "youta"];
member.map((name, index) => {
  //  console.log(`私の名前は${name}です。背が${index}番目に高いです`)
});
