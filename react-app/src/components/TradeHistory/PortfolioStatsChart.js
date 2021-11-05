import { PieChart } from 'react-chartkick'
import 'chartkick/chart.js'



function PortfolioStatsChart({trades}){

    const values = trades?.map((trade) => [trade.ticker, trade.quantity, trade.execution_price])

    const calculateDollarAmount = (values) => {
        let res = []
        for(let i = 0; i < values?.length; i++){
            let x = values[i]
            const [ ticker, quantity, price] = x
            const dollarAmount = quantity * price
            res.push([ticker, dollarAmount])
        }
        return res
    }

    // console.log(`trade history chart`, calculateDollarAmount(values))

    return(
        <PieChart data={calculateDollarAmount(values)} />
        // <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
    )
}

export default PortfolioStatsChart
