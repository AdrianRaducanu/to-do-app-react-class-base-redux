import { Component } from 'react';
import './Item.css';
import { addItemHistory } from '../redux/actions/actionCreatorHistory';
import { deleteItem } from '../redux/actions/actionCreators';
import { connect } from 'react-redux';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleDelete() {
        const newItem = {
            name: this.props.item.name,
            status: "deleted"
        }
        this.props.addItemHistory(newItem);
        this.props.deleteItem(this.props.item);
    }

    handleDone() {
        const newItem = {
            name: this.props.item.name,
            status: "done"
        }
        this.props.addItemHistory(newItem);
        this.props.deleteItem(this.props.item);
    }

    render() {
        return(
            <div className='div-item'>
                <h4 className='item-name'>{this.props.item.name}</h4>
                {/* <h4 className='item-name'>{this.state.text}</h4> */} 
                <div className='btns'>
                    <button className='btn-done' onClick={this.handleDone}>Done</button>
                    <button className='btn-delete' onClick={this.handleDelete}>Delete</button>
                </div>
                
            </div>
        ) 
    };

}

//REDUX STUFF
const mapStateToProps = (state) => ({
    listOfHistoryItems : state.itemReducerHistory,
    listOfItems: state.itemReducer
  })

const mapDispatchToProps = {
    addItemHistory,
    deleteItem
  }

export default connect(mapStateToProps, mapDispatchToProps)(Item);