import { useEffect, useState } from 'react';
import './App.css';
import { Homepage } from "./components/homepage";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Details } from './components/details';

export const App = () => {
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      let data;
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        data = await response.json()
      }catch (err) {
        console.log(err)
      }
      setUsers(data)
    })()
  }, [])

  


  return (
    <div className='App'>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={users.map((user) => (
                <Homepage user={user} key={user.id} />
              ))} />
            <Route path="/users/:id" element={<Details users={users}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}
