import './style.css';
import coinExample from '../../assets/icons/bitcoinExample.png'

function CardsCoin() {
    return (
        <div className='card'>
            <div className='logoCoin'>
                <img src={coinExample} alt="BTC"/>
                <span>BTC</span>
            </div>
            <div className='cardDivider'></div>
            <div className='coinInfos'>
                <span>Price</span>
                <span>$122000</span>
            </div>
            <div className='coinInfos'>
                <span>1H</span>
                <span>-0.2%</span>
            </div>
            <div className='coinInfos'>
                <span>24H</span>
                <span>-0.1%</span>
            </div>
            <div className='coinInfos'>
                <span>7 Day</span>
                <span>-6.1%</span>
            </div>
        </div>
    )
}

export default CardsCoin;