import React  from 'react';
import logo from './logo.svg';
import './App.css';
import { useState ,  useEffect} from 'react';

function App() {
  
  const friends =[
    {name :'sumon', address:'nandipara', age: '23'},
    {name :'sunny', address:'nandipara', age: '23'},
    {name :'montu', address:'nandipara', age: '23'},
    {name :'soikot', address:'nandipara', age: '23'}
  ]
  return (


    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      {
        friends.map(frnd => <FriendsInfo friend ={frnd}></FriendsInfo>)
      }
      <Users></Users>
      
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] =  useState([]);
  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>setUsers(data));
  }, [])

  return(
    <div>
      <h2>Dynamic User:</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

















function Counter(){
  
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount (count - 1);

  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick ={handleIncrease}>Increase</button>
      <button onClick = {handleDecrease}>Decrease</button>
    </div>
  )
}













function FriendsInfo(props){
  const friendStyle ={
    borderRadius : '5px',
    backgroundColor: 'grey',
    color : 'yellow',
    marginTop: '100px'
}
  const {name, address, age} = props.friend
  return(
    <div style = {friendStyle}>
      <h1>{name}</h1>
      <p>{address}</p>
      <h2>{age}</h2>
    </div>
  )
}









export default App;
