import { Component } from 'react';
import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }
    render() {
        return(
            <div className='div-item'>
                <h4 className='item-name'>{this.props.text}</h4>
                {/* <h4 className='item-name'>{this.state.text}</h4> */} 
                <div className='btns'>
                    <button className='btn-done'>Done</button>
                    <button className='btn-delete'>Delete</button>
                </div>
                
            </div>
        ) 
    };

}

export default Item;