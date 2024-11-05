import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reduceer이나 modifier은 처음으로 data를 바꿔줌
// state = 0 => state가 undefind일 때 0으로 초기화 해줌
const countmodifier = (count = 0) => {
  return count;
};

const countStore = legacy_createStore(countmodifier);

console.log(countStore);
