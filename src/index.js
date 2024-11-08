import { configureStore } from "@reduxjs/toolkit";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }]; // 상태를 수정하느 것이 아니라 새로운 것을 return하기
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

// store을 수정할 수 있는 유일한 방법은 action을 보내는 방법 뿐임
const store = configureStore({
  reducer: {
    todos: reducer,
  },
});

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
