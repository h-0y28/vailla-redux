import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countmodifier = (count = 0, action) => {
  if (action.type === "ADD") return count + 1;
  else if (action.type === "MINUS") return count - 1;
  else return count;
};

const countStore = legacy_createStore(countmodifier);

// store에 변화가 있을 떄마다 감지하여 불려짐
const onChange = () => {
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
