import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComp, onClickDel } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComp(idx)}>完了</button>
              <button onClick={() => onClickDel(idx)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
