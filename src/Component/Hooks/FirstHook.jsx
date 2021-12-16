import React,{useState,useEffect} from 'react'


const FirstHook = () => {
    let [count,setCount] = useState(1);

    useEffect(() => {
        document.title = count;
        console.log("Dom Rendered" + count +"Times");
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}> Submit{ count}</button>
        </div>
    )
}

export default FirstHook
