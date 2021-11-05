import './AssetDetails.css'
import StockChart from './StockChart.js';
import Footer from '../Footer';
import IndividualStockNews from './IndividualStockNews'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NewTradeForm from '../NewTradeForm/NewTradeForm';
import { useDispatch, useSelector } from 'react-redux'
import { getWatchlists } from '../../store/watchlist';

function AssetDetails(){

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getWatchlists)
    }, [dispatch])


    const portfolios = useSelector((state) => Object.values(state.portfolios))
    const session = useSelector((state) => state.session).user


    const usrsPorts = portfolios.filter((port) => port.owner_id === session.id)
    

    const { ticker } = useParams()
    const [executionPrice, setExecutionPrice] = useState('')
    const [companyProfile, setCompanyProfile] = useState(null)
    const [basicFinancials, setBasicFiancials] = useState(null)
    const [companyOverview, setCompanyOverview] = useState(null)

    useEffect(() => {
        if(companyProfile?.ticker !== ticker) getTickerCompanyProfile(ticker)
        if(basicFinancials?.ticker !== ticker) getTickerBasicFianacials(ticker)
        updateExecutionPrice(ticker)

        if(companyOverview?.symbol !== ticker) getCompanyOverview(ticker)

    }, [ticker, basicFinancials?.ticker, companyOverview?.symbol, companyProfile?.ticker])

    const updateExecutionPrice = (ticker) => {
        const url = `https://finnhub.io/api/v1//quote?symbol=${ticker}&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setExecutionPrice(res.c))
    }

    const getTickerCompanyProfile = (ticker) => {
        const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setCompanyProfile(res))
    }

    const getTickerBasicFianacials = (ticker) => {
        const url = `https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setBasicFiancials(res))
    }

    const getCompanyOverview = (ticker) => {
        const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=1X50D4IAC99C7FNS`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setCompanyOverview(res))
    }

    return(
        <div>
            {/* < Header /> */}
             <NewTradeForm ticker={ticker}/>
            < StockChart />
            {/* < Watchlist />  */}
           <div className='add__stock-container'>
                <h4>Add This stock To A Watchlist</h4>
                <select className='select__port-input'>
                    {usrsPorts.map((port) => (
                        <option id={port.id} value={port.name}>{port.name}</option> 
                    ))}
                    
                </select>
                <button className='add__stock-button' type='submit'>Add</button>
           </div>

           <div className='stock__information'>
                <div className='stock__details'>
                    <h1 className='top__label'>About</h1>
                    <h2 className='si__description'>{companyOverview?.Description}</h2>
                    <h1 className='si__label'>Statistics</h1>
                    <div className='si__stats'>
                        <div className='si__stats-location'>
                            <img className='stats__icon'src="https://img.icons8.com/ios-glyphs/30/000000/worldwide-location.png" alt='not found'/>
                            <h3> Location: {companyProfile?.country}</h3>
                        </div>
                    
                        <div className='si__stats-exchange'>
                            <img className='stats__icon' src="https://img.icons8.com/ios-filled/50/000000/exchange.png" alt='not found'/>
                            <h3>Exchange : {companyProfile?.exchange}</h3>
                        </div>
                        
                        <div className='si__stats-IPO'>
                            <img className='stats__icon' src="https://img.icons8.com/ios/50/000000/calendar--v1.png" alt='not found'/>
                            <h3>IPO Date : {companyProfile?.ipo}</h3>
                        </div>
                        
                    </div>
                    <h1 className='si__label'>Financials</h1>
                    <div className='financial-details'>
                        <div className='left-financials'>
                            <h3>Price Per Share : ${executionPrice}</h3>
                            <h3>Market Cap : {companyProfile?.marketCapitalization}</h3>
                            <h3>Shares Outstanding : {companyProfile?.shareOutstanding}</h3>
                            <h3>PE Ratio : {companyOverview?.PERatio}</h3>
                        </div>
                        <div className='right-financials'>
                            {/* {console.log('basicFiancials.metric.52WeekHigh = ',basicFinancials?.metric['52WeekHigh'])} */}
                            {basicFinancials? <h3>52 Week High : ${basicFinancials?.metric['52WeekHigh']}</h3> : ''}
                            {basicFinancials? <h3>52 Week Low : ${basicFinancials?.metric['52WeekLow']}</h3> : ''}
                            {basicFinancials ? <h3>Annual Dividend per Share: {basicFinancials?.metric['dividendPerShareAnnual']}</h3> : ''}
                            <h3>Earnings Per Share : {companyOverview?.EPS}</h3>
                        </div>
                    </div>
                </div>
                <div className='stock__news'>
                    <h1 className='news__label'> Company News </h1>
                    <IndividualStockNews /> 
                </div>
           </div>

           <Footer />

        </div>

        
    )
}

export default AssetDetails;
