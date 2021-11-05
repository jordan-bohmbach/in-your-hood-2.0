import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import { getWatchlists, deleteWatchlist } from '../../store/watchlist';

import './Watchlist.css'

function Watchlist(){
    const dispatch = useDispatch()
    const watchlists = useSelector((state) => Object.values(state.watchlists))
    // const session = useSelector((state) => state.session)

    useEffect(() => {
        dispatch(getWatchlists());
    }, [dispatch]);



    const handleDelete = () => {
        dispatch(deleteWatchlist(Number(watchlists.id)))
        // console.log(watchlists.id)
    }


    return (
    <div className='list__outer-container'>
        <div className='dash__watchlist-container'>

            <section class="accordion">
            <input type="checkbox" name="collapse2" id="handle3" />
            <h2 class="handle">
                <label for="handle3">Watchlist</label>
            </h2>
            <div class="content">
                {watchlists.map((list) => (
                    <>
                    <h1 class="handle">{list.name}</h1>
                    <div >
                        {list.stocks.map((stock) => (
                            <div className='inner__content'>
                            <a className='stock__link'href={`/stock/${stock}`}><p>{stock}</p></a>
                            <div className='buttons'>
                                <button className='buttons' ><img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" alt='not found'/></button>
                                <button className="deleteWatchlist" onClick={() => handleDelete(watchlists?.id)}><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" alt='not found'/></button>
                            </div>    
                            </div>
                        ))}
                        <p></p>
                    </div>
                    </> 
                ))}

            </div>
            </section>


        </div>         

    </div>        
  
       
    )
}


export default Watchlist;
