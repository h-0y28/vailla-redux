import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// 휴먼에러를 방지하기 위함 (오타)
const ADD = "ADD";
const MINUS = "MINUS";

// 현재 상태의 application과 함께 불려지는 함수
// return하는 것은 apllication의 state가 됨
const countmodifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = legacy_createStore(countmodifier);

// store에 변화가 있을 떄마다 감지하여 불려짐
const onChange = () => {
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange); // store에서 change를 감지하고 싶을 때

const handleAdd = () => {
  countStore.dispatch({ type: ADD }); // action은 objedt이어야함 (sting 금지) , 무조건 type이라고 해야함 (name금지)
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
