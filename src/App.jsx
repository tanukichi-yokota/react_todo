import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./compornents/InputTodo";
import { IncompleteTodos } from "./compornents/IncompleteTodos";
import { CompleteTodos } from "./compornents/CompleteTodos";

export const App = () => {
  // state
  const [todoText, setTodoText] = useState("");
  const [disableToAddTodo, setDisableToAddTodo] = useState(false);
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // text取得
  const onChangeToodoText = (event) => setTodoText(event.target.value);

  // 追加
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    setDisableToAddTodo(newTodos.length > 4);
  };

  // 削除
  const onClickDel = (idx) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(idx, 1);
    setIncompleteTodos(newTodos);
    setDisableToAddTodo(newTodos.length > 4);
  };

  // 完了
  const onClickComp = (idx) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(idx, 1);
    setIncompleteTodos(newTodos);

    const newComps = [...completeTodos, incompleteTodos[idx]];
    setCompleteTodos(newComps);
    setDisableToAddTodo(newTodos.length > 4);
  };

  // 戻す
  const onClickBack = (idx) => {
    const newTodos = [...incompleteTodos, completeTodos[idx]];
    setIncompleteTodos(newTodos);

    const newComps = [...completeTodos];
    newComps.splice(idx, 1);
    setCompleteTodos(newComps);
    setDisableToAddTodo(newTodos.length > 4);
  };

  return (
    <>
      {/* 入力 */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeToodoText}
        onClick={onClickAdd}
        disabled={disableToAddTodo}
      />
      {disableToAddTodo && <p>登録は5個まで</p>}

      {/* 未完了 */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComp={onClickComp}
        onClickDel={onClickDel}
      />

      {/* 完了 */}
      <CompleteTodos todos={completeTodos} onClick={onClickBack} />
    </>
  );
};
