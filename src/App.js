import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const url = 'http://127.0.0.1:8000/index'

  const [users, setUsers] = useState([])

  const getDataUsers = async () => {
    const response = await fetch('http://127.0.0.1:8000/index')
    const dataku = await response.json()
    const users = dataku.slice(0, 8)
    setUsers(users)
  }

  useEffect(() => {
    getDataUsers()
  }, [])

  return (
    <div className="App">
      <h3>List Users</h3>
      {users.map((user) => {
        return (
          <p key={user.id}>
            {user.login}
          </p>
        )
      })}
    </div>
  );
}

export default App;