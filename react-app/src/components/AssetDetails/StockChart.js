import { useParams } from "react-router"
import TradingViewWidget from 'react-tradingview-widget'
import './AssetDetails.css'

const StockChart = () => {

    const { ticker } = useParams()
    return(
        <>
            <h1 className='chart__label'>{ticker}</h1>

            <div className='chart'>
               <TradingViewWidget symbol={ticker}></TradingViewWidget> 
            </div>
            
        </>
    )
}

export default StockChart
