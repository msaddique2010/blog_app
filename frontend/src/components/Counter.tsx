import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    
    return (
        
        <div>
            <h1 className="text-xl font-bold">{count}</h1>
            <button onClick={() => {setCount(count + 1)}} className="border">Add 1</button>
        </div>
    )
}
