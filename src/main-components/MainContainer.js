import './MainContainer.css'
import Item from '../shared-components/Item.js';
import { Component, useState } from 'react';

class MainContainer extends Component {
    // const [items, setItems] = useState([]);
    // const [input, setInput] = useState("");

    // const handleInput = event => {
    //     setInput(event?.target.value);
    //     //De intrebat dc e cu un caracter in urma
    //     //console.log(input)
    // }
    // const handleBtn = () => {
    //     setItems([...items, input]);
    //     setInput('');
    // }
    constructor() {
        super();
        this.state = {
            input: "",
            items: []
        }

        this.handleBtn = this.handleBtn.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    

    handleInput(event) {
        this.setState({input : event?.target.value});
    }

    handleBtn() { 
        if(this.state.input !== '') {
            this.setState({
                items : [...this.state.items, this.state.input],
                input : ""
            })
        }
    }

    render() {
        return(
            <div className="main-container">
                <h2>MainContainer</h2>
                <h3>No. of items: {this.state.items?.length}</h3>
                <div className='item-container'>
                    {
                        this.state.items?.map(item => 
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
                        value={this.state.input}
                        className='input-add' 
                        onChange={this.handleInput}
                    />
                    <button className='btn-add' onClick={this.handleBtn}>Add</button>
                </div>
            </div>
        )
    }
    
}

export default MainContainer;