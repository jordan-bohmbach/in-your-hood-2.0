
const LOAD_WATCHLISTS = 'watchlists/LOAD'
const ADD_WATCHLIST = 'watchlists/ADD'
const REMOVE_WATCHLIST = 'watchlists/REMOVE'
const EDIT_WATCHLIST = 'watchlists/EDIT'

const loadWatchlists = (watchlists) => ({
    type: LOAD_WATCHLISTS,
    watchlists
})

const update = (watchlist) => ({
    type: EDIT_WATCHLIST,
    watchlist
})

const addOneWatchlist = (watchlist) => ({
    type: ADD_WATCHLIST,
    watchlist
})

const remove = (watchlistId) => ({
    type: REMOVE_WATCHLIST,
    watchlistId,
})

export const getWatchlists = () => async (dispatch) => {
    const response = await fetch(`/api/watchlists`);
    const watchlistList = await response.json()
    dispatch(loadWatchlists(watchlistList))
}

export const createOneWatchlist = (payload) => async dispatch => {
    const {
        name,
        description,
        owner_id,
        createdat
    } = payload

    const response = await fetch(`/api/watchlists`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, description, owner_id, createdat})
    });

    let newWatchlist
    if(response.ok){
        newWatchlist = await response.json();
        dispatch(addOneWatchlist(newWatchlist))
    }
    return newWatchlist
}

export const updateWatchlist = watchlist => async dispatch => {
    const response = await fetch(`/api/watchlists/${watchlist.id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(watchlist)
    })

    if(response.ok){
        const watchlist = await response.json()
        dispatch(update(watchlist))
        return watchlist
    }
}

export const deleteWatchlist = watchlistId => async dispatch => {
    const response = await fetch(`/api/watchlists/${watchlistId}`, {
        method: 'DELETE'
    })

    if(response.ok){
        dispatch(remove(watchlistId))
    }
}

export default function watchlistReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_WATCHLISTS:
            const newWatchlists = {}
            action['watchlists'].watchlists.forEach(watchlist => {
                newWatchlists[watchlist.id] = watchlist;
            })
            return {
                ...state,
                ...newWatchlists
            }

        case ADD_WATCHLIST:
            if(!state[action.watchlist.id]){
                return {
                    ...state,
                    [action.watchlist.id] : action.watchlist
                }
            }

            return {
                ...state,
                [action.watchlist.id] : {
                    ...state[action.watchlist.id],
                    ...action.watchlist
                }
            }

        case REMOVE_WATCHLIST:
            let newState = { ...state }
            delete newState[action.watchlistId]
            return newState

        case EDIT_WATCHLIST:
            return {
                ...state,
                [action.watchlist.id] : action.watchlist
            }

        default:
            return state
    }
}