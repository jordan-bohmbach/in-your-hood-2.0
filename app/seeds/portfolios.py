from app.models import db, Portfolio
from datetime import datetime

def seed_portfolios():
    technology = Portfolio(name='Technology', description='Companies that build new things', current_cash_balance=50000, owner_id='1', starting_cash_balance=50000, createdat=datetime(2021, 9, 1, 1, 1, 1))
    agriculture = Portfolio(name='Agriculture', description='Companies that grow food', current_cash_balance=10000, owner_id='2', starting_cash_balance=500000, createdat=datetime(2021, 9, 1, 1, 1, 1))
    travel = Portfolio(name='Travel', description='Companies', current_cash_balance=10000, owner_id='1', starting_cash_balance=500000, createdat=datetime(2021, 9, 1, 1, 1, 1))
    smallCap = Portfolio(name="Small-Cap", description='Small Cap Stocks', current_cash_balance=2500, owner_id='1', starting_cash_balance=500000, createdat=datetime(2021, 9, 1, 1, 1, 1))
    midCap = Portfolio(name="Mid-Cap", description='Mid Cap Stocks', current_cash_balance=25000, owner_id='1', starting_cash_balance=500000, createdat=datetime(2021, 9, 1, 1, 1, 1))
    largeCap = Portfolio(name="Large-Cap", description='Large Cap Stocks', current_cash_balance=100000, owner_id='1', starting_cash_balance=500000, createdat=datetime(2021, 9, 1, 1, 1, 1))

    db.session.add(technology)
    db.session.add(agriculture)
    db.session.add(travel)
    db.session.add(smallCap)
    db.session.add(midCap)
    db.session.add(largeCap)

    db.session.commit()


def undo_portfolios():
    db.session.execute('TRUNCATE portfolios RESTART IDENTITY CASCADE;')
    db.session.commit()
