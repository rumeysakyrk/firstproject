import { useState } from "react";

function Counter (){
 const [count, setCount]=useState(0);

 const inc = () => {
    setCount(count+1)
 }
 const des = () => {
    setCount(count-1)
 }

 return (
<>
<h4> {count} </h4>
<button onClick={inc}>
    Increase
</button>
<button onClick={des}>
    Decrease
</button>
</>
 );
}

export default Counter;