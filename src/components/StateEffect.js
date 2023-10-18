import { useState, useEffect } from "react";

function StateAndEffect (){
    const [number, setNumber]= useState(0);

    const [name, setName]=useState("rumeysa");

    useEffect (() => {
        console.log("Component mount edildi!");

        const interval = setInterval(() => {
            setNumber((n) => n+1);
//setNumber ifadesi parametre olarak number alıyor istenilen ifade şekli örneğin n ile kullanılabilir
        }, 1000);
        return () => clearInterval (interval);
    } , []);

    useEffect( () => {
        console.log("number state updated.");
    }, [number] );

    useEffect( () => {
        console.log("name state updated.");
    }, [name] );
    //state değişikliği yaşandığında eventi yakalıyor. 
    //burada name için değişen durumu yakalamaya yönelik kullanılmaktadır.

    return (
<div>
    <h1>
        {number}
    </h1>
    <button onClick={() => {setNumber(number+1)}}>
        Click
    </button>
        <hr />
    <h1>{name}</h1>
        <button onClick={() => {setName("Betül")}}> Click</button>


</div>

    );

}

export default StateAndEffect;



