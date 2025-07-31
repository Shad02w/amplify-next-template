"use client"

import { useState } from "react"
import "./../app/app.css"

interface Todo {
  id: string
  content: string
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function deleteTodo(id: string) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function createTodo() {
    const content = window.prompt("Todo content")
    if (content) {
      const newTodo: Todo = {
        id: Date.now().toString(), // Simple ID generation
        content
      }
      setTodos([...todos, newTodo])
    }
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map(todo => (
          <li onClick={() => deleteTodo(todo.id)} key={todo.id}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
      </div>
    </main>
  )
}
