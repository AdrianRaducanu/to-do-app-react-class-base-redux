import './HistoryContainer.css';
import ItemHistory from '../shared-components/ItemHistory';
import { Component } from 'react';
import { connect } from "react-redux";

class HistroyContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <div className='history-container'>
                <h2>Histroy</h2>
                <h3>No. of items:{this.props?.listOfItems.length}</h3>
                <div className='history-item'>
                    {
                        this.props?.listOfItems.map(el =>
                            <ItemHistory 
                                key={el.name}
                                item={el}
                            />
                            )
                    }
                </div>
            </div>
        )
    }
}

//REDUX STUFF
const mapStateToProps = (state) => ({
    listOfItems : state.itemHistoryReducer
  })

export default connect(mapStateToProps, {})(HistroyContainer);