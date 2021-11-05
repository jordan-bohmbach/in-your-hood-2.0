import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolios } from '../../store/portfolio'
import Charts from './Chart.js'
import './Dashboard.css'
import { deletePortfolio } from '../../store/portfolio'

function PortfolioStats(){
    const dispatch = useDispatch()

    const portfolios = useSelector((state) => Object.values(state.portfolios))
    const user = useSelector((state) => state.session.user)

    const userPortfolios = portfolios.filter((port) =>  port.owner_id === user.id)
    
    const [portfolio, setPortfolio] = useState(null)
    
    useEffect(()=>{
        if(!portfolio) setPortfolio(userPortfolios[0])
    }, [userPortfolios, portfolio])


    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch])

    
  
    const handleDelete = (id) => {
        dispatch(deletePortfolio(id))
        setPortfolio(userPortfolios[0])
    }

    const changePortfolio = (id) => {
        setPortfolio(portfolios?.filter(portfolio=> portfolio.id === parseInt(id))[0])
    }
    
    return (
        <>
            
            <div className='stats__header'>
                
             <form >
                <select className='port__toggle' onChange={((e) => changePortfolio(e.target.value))}>
                    {userPortfolios.map((port) => (
                         <option value={port.id} key={port.id} >{port.name}</option>
                    ))}
                   
                </select>
              </form> 

               <button className='delete__port-button' onClick={()=>handleDelete(portfolio.id)}>Delete Portfolio</button>

               
            </div>
            


            <div className='port__chart'>
                {portfolio? <Charts portfolio={portfolio}/>:''}
            </div>


            <div className='tradeHistory__link'>        
                    <h2 className='stats__balance'>$ {portfolio?.current_cash_balance}</h2>
                    
                    <a className='th__link' href={`/${portfolio?.name}/trade-history`}>Trade History</a>
            </div>    

                
            
        </>    
        
    )
}

export default PortfolioStats; 
