import './HistoryContainer.css';
import ItemHistory from '../shared-components/ItemHistory';

function HistroyContainer() {
    return(
        <div className='history-container'>
            <h2>Histroy</h2>
            <h3>No. of items: </h3>
            <div className='history-item'>
                <ItemHistory />
                <ItemHistory />
            </div>
        </div>
    )
}

export default HistroyContainer;