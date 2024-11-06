import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// action: 전송받은 message저장
const countmodifier = (count = 0, action) => {
  console.log(action); // 처음으로i intialized된 function출력
  if (action.type === "ADD") return count + 1;
  else if (action.type === "MINUS") return count - 1;
  else return count;
};

const countStore = legacy_createStore(countmodifier);

countStore.dispatch({ type: "ADD" }); // dispatch: message를 전송하는 방법
countStore.dispatch({ type: "ADD" }); // {type: "ADD"} : message
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
