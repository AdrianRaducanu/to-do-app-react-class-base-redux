import { Component } from 'react';
import './ItemHistory.css';

class ItemHistroy extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render() {
       return(
        <div className='container-item-history'>
            <h4 className={`${this.props.item.status === "done" ? 'h4-done' : 'h4-deleted'}`}>{this.props.item.name}</h4>
            <h4 className={`${this.props.item.status === "done" ? 'h4-done' : 'h4-deleted'}`}>{this.props.item.status}</h4>
        </div>
        ) 
    }
}

export default ItemHistroy;