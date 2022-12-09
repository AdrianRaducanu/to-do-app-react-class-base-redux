import './Item.css';

function Item() {
    return(
        <div className='div-item'>
            <h4 className='item-name'>Hei</h4>
            <div className='btns'>
                <button className='btn-done'>Done</button>
                <button className='btn-delete'>Delete</button>
            </div>
            
        </div>
    )
}

export default Item;