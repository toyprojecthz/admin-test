import { useState } from "react";

function App() {
  let [title, setTitle] = useState(["강가가", "가강강", "난나"]);
  let [modal, setModal] = useState(false);
  function updateTitle() {
    let copy = [...title];
    copy[0] = "바뀐텍스트";
    setTitle(copy);
  }

  function sortList() {
    const copy = [...title];
    var result = copy.sort();
    setTitle(result);
    console.log(result);
  }
  function Modal() {
    return (
      <div>
        <h4>제목</h4>
        <p>내용</p>
        <span>날짜</span>
      </div>
    );
  }
  return (
    <div className="App">
      <button onClick={() => sortList()}>가나다정렬</button>
      <button onClick={() => updateTitle()}>텍스트변경</button>
      <ul>
        {title.map((item) => {
          return (
            <li
              onClick={() => {
                modal === true ? setModal(false) : setModal(true);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <p>2.17</p>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

export default App;
