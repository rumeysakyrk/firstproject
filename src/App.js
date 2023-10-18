import Header from './components/Header';
import User from './components/User';
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ExampleInput from './components/ExampleInput';
import StateAndEffect from './components/StateEffect';

function App() {
  const [isVisible, setisVisible]=useState(false);
  const [color, setColor] = useState("Blue");
  const [number, setNumber]= useState(300);
  const [myfriends, setMyfriends] =useState(["Emine", "Şeyma"]);
  const [myLocation, setMylocation]= useState({title: "Konya", zip: 4240})

  const friends = [
    {
      id: 1,
      name: "Rumella"
    },
    {
      id: 2,
      name: "Bella"
    },
    {
      id: 3,
      name: "Nutella"
    }
  ];

  const location = {
    title: "Konya",
    zip: 4240
  };

  return (
    <div>
      <Header />
      
      <User name="Rumella" isLoggedIn={true} age={23} friends={friends} location={location} /> 
      <h1>Color: {color}</h1>

      <button onClick={() => setColor("Red")}> Change Color </button>
      <br />
      <h2>Number: {number} </h2>

      <button onClick={() => setNumber(100)} > Change number </button>
      <br />
      <h2>Friends</h2>
      {myfriends.map((item, index) => <div key={index}> {item}  </div> ) }

      <button onClick={() => setMyfriends( [...myfriends, "Roma"]) }>Add Friend</button>

      <p>{myLocation.title} {myLocation.zip} </p>
      
      <button onClick={() => setMylocation( {title: "istanbul", zip: 3434}) }>Change the location</button>
      
     
      <ExampleInput />
      <br />
      <hr />

      <hr />
      <Counter />
      <hr />

      {isVisible && < StateAndEffect />}
      <button onClick={() => setisVisible(!isVisible)}>
        Toggle counter
      </button>

    </div>
  );
}

export default App;
