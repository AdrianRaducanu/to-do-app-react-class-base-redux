import './MainContainer.css'
import Item from '../shared-components/Item.js';
import { Component } from 'react';
import { addItem, deleteItem } from "../redux/actions/actionCreators";
import { connect } from "react-redux";

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

    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }

        this.handleBtn = this.handleBtn.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
    }
    
    handleInput(event) {
        this.setState({input : event?.target.value});
    }

    handleBtn() { 
        if(this.state.input !== '') {
            const newItem = {
                name: this.state.input,
                status: "uncompleted"
            }
            this.setState({
                input : ""
            })
            this.props.addItem(newItem)
        }
    }

    render() {
        return(
            <div className="main-container">
                <h2>MainContainer</h2>
                <h3>No. of items: {this.props?.listOfItems.length}</h3>
                <div className='item-container'>
                    {
                        this.props.listOfItems?.map(item => 
                            <Item 
                                key={item.name}
                                item={item}
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
                <button onClick={()=> console.log(this.props)}>REDUX LIST</button>
            </div>
        )
    }
    
}

//REDUX STUFF
const mapStateToProps = (state) => ({
    listOfItems : state.itemReducer
  })

const mapDispatchToProps = {
    addItem,
    deleteItem
  }

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);