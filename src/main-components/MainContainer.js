import './MainContainer.css'
import Item from '../shared-components/Item.js';
import { useState } from 'react';

function MainContainer() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const handleInput = event => {
        setInput(event?.target.value);
        //De intrebat dc e cu un caracter in urma
        //console.log(input)
    }
    const handleBtn = () => {
        setItems([...items, input]);
        setInput('');
    }

    return(
        <div className="main-container">
            <h2>MainContainer</h2>
            <h3>No. of items: {items.length}</h3>
            <div className='item-container'>
                {
                    items.map(item => 
                        <Item 
                            key={item}
                            text={item}
                        />)
                }
            </div>
            <div className='add-item'>
                <input 
                    id='input'
                    type="text"
                    value={input}
                    className='input-add' 
                    onChange={handleInput}
                 />
                <button className='btn-add' onClick={handleBtn}>Add</button>
            </div>
        </div>
    )
}

export default MainContainer;