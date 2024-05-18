import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해 봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해 봅시다.",
      isDone: true,
    },
  ]);
  const toggleComplete = (id) => {
    const upDateToDo = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, isDone: !todo.isDone}
      }
      return todo;
    })
    setTodos(upDateToDo);
  };

  const toggleDelet = (id) => {
    const removerToDo = todos.filter((todo) => todo.id !== id);
    setTodos(removerToDo);
  }
  
  /**
   * 1) 먼저 working에 map 그리고 Done에 map에
   * 컴포먼트를 돌아서 그려주는 부분에 삭제버튼 만들기!
   * 2) 삭제 버튼은 어떻게 만드냐면
   * 위에 toggleComplete 조금 변형해서
   * 삭제할 친구의 id가 필요
   * 21번째 줄 함수명만 변경해서 활용하기!!!
   * 
   * const removeToDo = todos.filter((todo) => todo.id !== id)
   * 삭제가 되지 않아야 될 것만 남아있는 상태!
   * 온클릭 넣는 거 까먹지 않기
   */
  return (
    <div>
      <div style={{
        maxWidth: "1200px",
        maxHeight: "800px",
        margin: "0 auto",
      }}>
        <header style={{
          display: "flex",
          padding: "10px",
          border: "2px solid #EEEEEE",
        }}>
          <p style={{
            

          }}>My Todo List</p>
          <p style={{
            justifyContent: "right",
            marginLeft: '5px'
          }}>React</p>
        </header>
        <main style={{
          padding: "10px",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#DDDDDD",
            borderRadius: "20px",
          }}>
            <form onSubmit={function(event) {
                event.preventDefault();
                const newTodo = {
                  id: Date.now(),
                  title: title,
                  contents: contents,
                  isDone: false,
                }
                setTodos([...todos, newTodo]);
              }}
            >
              <p>제목 <input value={title} onChange={function(event) {
                setTitle(event.target.value);
              }}/></p>
              <p>내용 <input value={contents} onChange={function(event) {
                setContents(event.target.value);
              }} /></p>
              <button>추가하기</button>
            </form>
          </div>
          <div>
            <div>
              <h2>🔥 Working 🔥</h2>
              {todos.filter(function(todo){
                return todo.isDone === false
              }).map(function(todo){
                return (
                  <div
                    key={todo.id} 
                    style={{
                    width: "300px",
                    border: '3px solid #76885B',
                    borderRadius: "20px",
                    margin: "10px",
                    padding: "20px",
                  }}>
                    <h3>{todo.title}</h3>
                    <p>{todo.contents}</p>
                    <button onClick={() => toggleComplete(todo.id)}>완료</button>
                    <button onClick={() => toggleDelet(todo.id)}>삭제</button>
                  </div>
                )
              })}
            </div>
            <div className='done'>
              <h2>🤸 Done 🤸</h2>
              {todos.filter(function(todo){
                return todo.isDone === true
              }).map(function(todo){
                return (
                  <div
                    key={todo.id} 
                    style={{
                      width: "300px",
                      border: '3px solid #76885B',
                      borderRadius: "20px",
                      margin: "10px",
                      padding: "20px",
                  }}>
                    <h3>{todo.title}</h3>
                    <p>{todo.contents}</p>
                    <button onClick={() => toggleComplete(todo.id)}>완료</button>
                    <button onClick={() => toggleDelet(todo.id)}>삭제</button>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
