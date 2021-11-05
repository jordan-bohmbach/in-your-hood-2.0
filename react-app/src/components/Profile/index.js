
import './Profile.css'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getPortfolios} from '../../store/portfolio'

function Profile(){
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user)
    const portfolios = useSelector((state) => Object.values(state.portfolios))

    // const usrPorts = portfolios.filter((port) =>  port.owner_id === sessionUser.id)

    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch])

    // const trades = usrPorts[0]?.portfolios

    // console.log('portfolios:', portfolio)

    return (
        <>
            <div className='userInfo__container'>
                <div className='pfp__tile'>
                   <div className='userInfo__pfp'></div>
                </div>

                <div className='userInfo__details'>
                    <h1 className='profile__name-display'>Hello! {sessionUser.firstname} {sessionUser.lastname}</h1>
                    
                    <div className='usrInfo__field'>
                        <p>username: </p>
                        <p className='profile__username-display'>{sessionUser.username}</p>
                    </div>
                    
                    
                    <div className='usrInfo__field'>
                        <p>email: </p>
                        <p className='usr__email'>{sessionUser.email}</p>
                    </div>
                </div>

            </div>
            <h1 className='profile__label-balance'>Portfolio Balance Summary</h1>
            <div className='balanceSummary__container'>
                {portfolios?.map((portfolio) => (
                    <>
                        <div className='profile__datarow'> 
                            <div className='profile__port-name'>
                                <p className='bs__label'>{portfolio.name}</p>
                            </div>
                            <div className='profile__port-balance'>
                                <p className='bs__label'>{portfolio.current_cash_balance}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <Footer />

        </>


    )
}

export default Profile;
