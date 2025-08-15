import { useState } from 'react';

function Toggle() {
    const [isOn, setisOn] = useState(true);

    return (
        <div>
            <h1>Toggle in React js</h1>
            <button style={{backgroundColor: "red"}} onClick={() => setisOn(!isOn)}>Toggle</button>

            {
                isOn ? <h1>Dinesh Kumawat</h1> :null
            }


        </div>
    )
}

export default Toggle;