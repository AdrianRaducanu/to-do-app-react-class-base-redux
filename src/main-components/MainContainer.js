import './MainContainer.css'
import Item from '../shared-components/Item.js';

function MainContainer() {
    return(
        <div className="main-container">
            <h2>MainContainer</h2>
            <h3>No. of items: </h3>
            <div className='item-container'>
                <Item />
                <Item />
            </div>
            <div className='add-item'>
                <input className='input-add'></input>
                <button className='btn-add'>Add</button>
            </div>
        </div>
    )
}

export default MainContainer;