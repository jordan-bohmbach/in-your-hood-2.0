import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'


import { getPortfolios } from '../../store/portfolio'
import PortfolioStock from './PortfolioStock'

function Charts({portfolio}) {
    const dispatch = useDispatch()
    // const currentUser = useSelector((state) => state.session).user
    // const [dataLoaded, setDataLoaded] = useState(true)
    const [finalDataObject, setFinalDataObject] = useState({})
    const [tickerArray, setTickerArray] = useState([])

    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch, portfolio])

    // const tickerData ={'AAPL': ''}
    // let tickerSet = new Set()

    // let count = 0
    // const loadTickers = () => {

    //     if (count < portfolio?.trades.length-1) {
    //         const url = `https://finnhub.io/api/v1/stock/candle?symbol=${portfolio.trades[count].ticker}&resolution=D&from=${Math.round((new Date()) / 1000) - (364 * 24 * 60 * 60)}&to=${Math.round(new Date() / 1000)}&token=c4uiisiad3ie1t1fvu90`
    //         fetch(url)
    //             .then((res) => res.json())
    //             .then((res) => tickerData[portfolio.trades[count].ticker] = res)
    //         cleandata()
    //         cleandata()
    //         cleandata()
    //         count++
    //     } else {
    //         setDataLoaded(true)
    //     }

    // }

    // const cleandata = () => {
    //     for (let key in tickerData){
    //         if(tickerData[key].s !== 'ok') {
    //             const url = `https://finnhub.io/api/v1/stock/candle?symbol=${key}&resolution=D&from=${Math.round((new Date()) / 1000) - (364 * 24 * 60 * 60)}&to=${Math.round(new Date() / 1000)}&token=c4uiisiad3ie1t1fvu90`
    //             fetch(url)
    //                 .then((res) => res.json())
    //                 .then((res) => tickerData[key] = res)
    //         }
    //     }
    //     // console.log('the final data object is ', tickerData)
    // }

    // useEffect(()=>{
    //     const interval = setInterval(loadTickers, 200);
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [userPortfolio])


    const portfolioBalanceHistory = {}
    let runningDate = new Date(Date.parse(portfolio?.createdat))

    const dateToString = (date) => `${(date.getFullYear())}-${date.getMonth() + 1}-${date.getDate()}`
    const getPreviousDayDate = date => new Date(date.getTime() - (60*24*60000))
    const getNextDayDate = date => new Date(date.getTime()+(60*24*60000))

    let trades

    const balanceScraper = () => {
        trades = portfolio?.trades
        portfolioBalanceHistory[dateToString(runningDate)] = portfolio?.starting_cash_balance
        // console.log('trades are', trades)
        const today = new Date()
        let pastTradeCount = 0
        while (runningDate < today){
            // console.log('here on day ', runningDate)

            let runningDateBalance = portfolioBalanceHistory[dateToString(runningDate)]
            // console.log('while loop condition here')

            if(trades){
                while(new Date(Date.parse(trades[pastTradeCount]?.transaction_date)) < getPreviousDayDate(runningDate)){ //while the first trade occured prior to the running date
                    if(trades[pastTradeCount].execution_type ==='BUY'){
                        // console.log('execution price is ',trades[pastTradeCount].execution_price)
                        // console.log('execution quantity is', trades[pastTradeCount].quantity)
                        runningDateBalance -= parseFloat(trades[pastTradeCount].execution_price) * parseInt(trades[pastTradeCount].quantity)
                        // console.log('executed a buy of ', trades[pastTradeCount])
                    } else {
                        runningDateBalance += parseFloat(trades[pastTradeCount].execution_price) * parseInt(trades[pastTradeCount].quantity)
                        // console.log('executed a sell of ', trades[pastTradeCount])
                    }
                    pastTradeCount++
                }
            }

            portfolioBalanceHistory[dateToString(getNextDayDate(runningDate))]=runningDateBalance
            runningDate = getNextDayDate(runningDate)
        }
        // console.log('final portfolioBalanceHistory is ', portfolioBalanceHistory)
        setFinalDataObject(portfolioBalanceHistory)
    }


    useEffect(()=>{
        balanceScraper()
    }, [portfolio])

    useEffect(()=> {
        let newArr = []
        let tickerSet = new Set()
        portfolio.trades.forEach(trade=> {
            if(!tickerSet.has(trade.ticker)){
                tickerSet.add(trade.ticker)
                newArr.push(trade.ticker)
            }
        })
        setTickerArray(newArr)
    }, [portfolio])



    return (

        <>
            <div className='chart-area'>
                {finalDataObject ? <LineChart data={finalDataObject} /> : ''}

            </div>
            <div className='dashboard-stock-section'>
                <div className='stock-list-header'>{portfolio?.name}</div>
                <div className='stock-list-header'>Stocks</div>
                <div className='stock-list'>
                    {tickerArray?.map(ticker=> (
                        <PortfolioStock ticker={ticker} key={ticker}/>
                    ))}
                </div>
            </div>
        </>


    )
}

export default Charts;
