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
  
  return (
    <div style={{
      textAlign: "center",
      margin: "0 auto",
    }}>
      <div style={{
        width: "1200px",
        height: "800px",
        margin: "0 auto",
      }}>
        <header style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          border: "2px solid #EEEEEE",
        }}>
          <p style={{
            
          }}>My Todo List</p>
          <p style={{
            
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
                  id: 5,
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
              <button type='submit'>추가하기</button>
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
                    <p>완료여부 {todo.isDone.toString()}</p>
                    <button>완료</button>
                    <button>취소</button>
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
                    <p>완료여부 {todo.isDone.toString()}</p>
                    <button>완료</button>
                    <button>취소</button>
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
