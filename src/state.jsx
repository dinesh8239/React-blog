import { useState } from 'react'

function FruitName() {
    const [fruit, setFruit] = useState("Mango")
    const changeFruit = () => {
        setFruit("Seetafal")
    }
    return (
        <div>
            <h1>{fruit}</h1>
            <button onClick={changeFruit}>Change the fruit</button>
        </div>
    )
}

export default FruitName;