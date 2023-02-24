import { createRoot } from 'react-dom/client'
import { useState } from 'react'

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }

}

function encode (number) {
    wait(1000)
    return Date.now()
}

function App () {
    const [name, setName] = useState('Amine')
    const [number, setNumber] = useState(0)

    const onChange = function (e) {
        if (e.target.getAttribute('name') === 'name') {
            setName(e.target.value)
        }
        if (e.target.name === 'number') {
            setNumber(e.target.value)
        }
    }

    const encoded = encode(number)

    return <div>
        <div className="form-group">
            <label htmlFor="name"></label>
            <input name="name" id="name" type="text" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="number"></label>
            <input name="number" id="number" type="text" value={number} onChange={onChange} />
        </div>
        <h2>Encoded : {encoded}</h2>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
