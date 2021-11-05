Inyourhood is a clone of popular trading app robinhood.

This web app is built with a react frontend and a flask backend. It is deployed on heroku in a docker container at https://in-your-hood.herokuapp.com/

Log in as a demo user to view a dashboard with today's stock market news as well as your portfolios and watchlists of stocks. Users can browse the website and create/delete portfolios and watchlists. Search for a stock that you are interested in and either add it to a watchlist, or make a trade with the stock to add it into a portfolio that you have created. Stock pricing information is pulled in from the finnhub api and company information is pulled from the alphadvantage api. Navigate to the trade history for any portfolio in order to see users trade history and a breakdown of stocks that make up that portfolio.
