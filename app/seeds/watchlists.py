from app.models.watchlist import Watchlist
from app.models import db, Watchlist
from datetime import date, datetime

def seed_watchlists():
    demo_watchlist_1 = Watchlist(name='TechWatch', description='Technology stocks I am watching for the future', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))
    demo_watchlist_2 = Watchlist(name='Favorites', description='Stocks that have always treated me well', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))
    demo_watchlist_3 = Watchlist(name="Cars", description='Automotive stocks', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))
    demo_watchlist_4 = Watchlist(name='Coffee', description='I love my coffee', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))
    demo_watchlist_5 = Watchlist(name='Food', description='More than just DoorDash...healthy food, healthy life', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))
    demo_watchlist_6 = Watchlist(name='Travel', description='I love traveling', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))
    demo_watchlist_7 = Watchlist(name='Small-Cap', description='Small-Cap Stocks', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))
    demo_watchlist_8 = Watchlist(name='Mid-Cap', description='Mid-Cap Stocks', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))
    demo_watchlist_9 = Watchlist(name='Large-Cap', description='Large-Cap Stocks', owner_id=1, createdat=datetime(2021, 9, 1, 1, 1, 1))

    db.session.add(demo_watchlist_1)
    db.session.add(demo_watchlist_2)
    db.session.add(demo_watchlist_3)
    db.session.add(demo_watchlist_4)
    db.session.add(demo_watchlist_5)
    db.session.add(demo_watchlist_6)
    db.session.add(demo_watchlist_7)
    db.session.add(demo_watchlist_8)
    db.session.add(demo_watchlist_9)

    db.session.commit()


def undo_watchlists():
    db.session.execute('TRUNCATE watchlist RESTART IDENTITY CASCADE;')
    db.session.commit()