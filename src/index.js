const myProfile = {
  name: "ひかる",
  age: 25
};

//${}の中身が冗長でわかりにくい
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);

//分割代入
const { name, age } = myProfile;

//すっきり書くことができた
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);

const myProfile２ = ["ひかる", 25];

// indexで指定する場合
const message3 = `名前は${myProfile２[0]}です。年齢は${myProfile２[1]}です`;
console.log(message3);

// 分割代入
const [name２, age２] = myProfile２;
const message4 = `名前は${name２}です。年齢は${age２}です。`;
console.log(message4);
