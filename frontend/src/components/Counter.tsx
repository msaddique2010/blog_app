import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    
    return (
        
        <div className="counter-box">
            <h1 className="counter-value">{count}</h1>
            <button onClick={() => {setCount(count + 1)}}>Add 1</button>
        </div>
    )
}
