const LOAD_PORTFOLIOS = 'portfolios/LOAD'
const ADD_PORTFOLIO = 'portfolios/ADD'
const REMOVE_PORTFOLIO = 'portfolios/REMOVE'
const EDIT_PORTFOLIO = 'portfolios/EDIT'
const ADD_TRADE_TO_PORTFOLIO = 'portfolios/trade'

const loadPortfolios = (portfolios) => ({
    type: LOAD_PORTFOLIOS,
    portfolios
})

const update = (portfolio) => ({
    type: EDIT_PORTFOLIO,
    portfolio
})

const addOnePortfolio = (portfolio) => ({
    type: ADD_PORTFOLIO,
    portfolio
})

export const addOneTrade = (trade) => ({
    type: ADD_TRADE_TO_PORTFOLIO,
    trade
})

const remove = (portfolioId) => ({
    type: REMOVE_PORTFOLIO,
    portfolioId,
})

export const getPortfolios = () => async(dispatch) => {
    const response = await fetch(`/api/portfolios`);
    const portfolioList = await response.json()
    dispatch(loadPortfolios(portfolioList))
}

export const createOnePortfolio = (payload) => async dispatch => {
    const {
        name,
        description,
        current_cash_balance,
        starting_cash_balance,
        owner_id,
        createdat
    } = payload

    const response = await fetch(`/api/portfolios`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, current_cash_balance, starting_cash_balance, owner_id, createdat })
    });

    let newPortfolio
    if (response.ok) {
        newPortfolio = await response.json();
        dispatch(addOnePortfolio(newPortfolio))
    }
    return newPortfolio
}

export const createOneTrade = (payload) => async dispatch => {
    const {
        portfolio_id,
        ticker,
        execution_price,
        execution_type,
        quantity,
        transaction_date
    } = payload

    const response = await fetch(`/api/trades`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({portfolio_id, ticker, execution_price, execution_type, quantity, transaction_date})
    })

    let newTrade
    if(response.ok){
        newTrade = await response.json();
        dispatch(addOneTrade(newTrade))
    }
    return newTrade
}

export const updatePortfolio = portfolio => async dispatch => {
    const response = await fetch(`/api/portfolios/${portfolio.id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(portfolio)
    })

    if (response.ok) {
        const portfolio = await response.json()
        dispatch(update(portfolio))
        return portfolio
    }
}

export const deletePortfolio = portfolioId => async dispatch => {
    const response = await fetch(`/api/portfolios/${portfolioId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(remove(portfolioId))
    }
}

export default function portfolioReducer(state={}, action){
    switch (action.type) {
        case LOAD_PORTFOLIOS:
            const newPortfolios = {}
            action['portfolios'].portfolios.forEach(portfolio => {
                newPortfolios[portfolio.id] = portfolio;
            })
            return {
                ...state,
                ...newPortfolios
            }

        case ADD_PORTFOLIO:
            if(!state[action.portfolio.id]) {
                return {
                    ...state,
                    [action.portfolio.id] : action.portfolio
                }
            }

            return {
                ...state,
                [action.portfolio.id] : {
                    ...state[action.portfolio.id],
                    ...action.watchlist
                }
            }

        case REMOVE_PORTFOLIO:
            let newState = { ...state }
            delete newState[action.portfolioId]
            return newState

        case EDIT_PORTFOLIO:
            return {
                ...state,
                [action.portfolio.id] : action.portfolio
            }

        case ADD_TRADE_TO_PORTFOLIO:
            let tradeState = { ...state }
            tradeState[action.trade.portfolio_id].trades.push(action.trade)
            return tradeState

        default:
            return state
    }
}
