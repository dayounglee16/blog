import { useState } from "react";
import "./App.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.lists[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

function App() {
  //array/object다룰 때 원본 보존하는 게 좋음
  const [lists, setLists] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "리액트 공부",
  ]);
  const [count, setCount] = useState([0, 0, 0]); //💚 클릭 시 숫자 증가
  const [modal, setModal] = useState("false"); //모달창
  const [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {/* map 사용으로 코드 축약(중괄호 내부에서는 for문, 조건문등 사용이 불가하다) */}
      {lists.map((list, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {lists[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...count];
                  copy[i] = count[i] + 1;
                  setCount(copy);
                }}
              >
                💚
              </span>
              {count[i]}
            </h4>
            <button
              onClick={() => {
                let deleteBtn = [...lists];
                deleteBtn.splice(i, 1);
                setLists(deleteBtn);
              }}
            >
              삭제
            </button>
            <p>6월 21일 발행</p>
          </div>
        );
      })}
      {modal === true ? (
        <Modal
          color={"rgb(183, 219, 198)"}
          lists={lists}
          setLists={setLists}
          title={title}
        />
      ) : null}
    </div>
  );
}

export default App;
