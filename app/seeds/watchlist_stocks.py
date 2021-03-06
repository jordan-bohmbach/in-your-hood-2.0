from app.models.watchlist_stock import WatchlistStock
from app.models import db, WatchlistStock
from datetime import date

def seed_watchlist_stocks():
    demo_watchlist_stock_1 = WatchlistStock(watchlist_id=1, ticker="GBTC")
    demo_watchlist_stock_2 = WatchlistStock(watchlist_id=1, ticker="NVDA")
    demo_watchlist_stock_3 = WatchlistStock(watchlist_id=1, ticker="INTC")
    demo_watchlist_stock_4 = WatchlistStock(watchlist_id=1, ticker="PYPL")
    demo_watchlist_stock_5 = WatchlistStock(watchlist_id=1, ticker="BABA")

    demo_watchlist_stock_6 = WatchlistStock(watchlist_id=2, ticker="GME")
    demo_watchlist_stock_7 = WatchlistStock(watchlist_id=1, ticker="BBY")
    demo_watchlist_stock_8 = WatchlistStock(watchlist_id=2, ticker="DOGE")
    demo_watchlist_stock_9 = WatchlistStock(watchlist_id=3, ticker="F")
    demo_watchlist_stock_10 = WatchlistStock(watchlist_id=1, ticker="XOM")
    demo_watchlist_stock_11 = WatchlistStock(watchlist_id=1, ticker="T")
    demo_watchlist_stock_12 = WatchlistStock(watchlist_id=2, ticker="JNJ")
    demo_watchlist_stock_13 = WatchlistStock(watchlist_id=2, ticker="DIS")
    demo_watchlist_stock_14 = WatchlistStock(watchlist_id=1, ticker="PTON")
    demo_watchlist_stock_15 = WatchlistStock(watchlist_id=1, ticker="ETHE")
    demo_watchlist_stock_16 = WatchlistStock(watchlist_id=2, ticker="ONTX")
    demo_watchlist_stock_17 = WatchlistStock(watchlist_id=3, ticker="POAHY")
    demo_watchlist_stock_18 = WatchlistStock(watchlist_id=3, ticker="GM")
    demo_watchlist_stock_19 = WatchlistStock(watchlist_id=3, ticker="HMC")
    demo_watchlist_stock_20 = WatchlistStock(watchlist_id=4, ticker="SJM")
    demo_watchlist_stock_21 = WatchlistStock(watchlist_id=4, ticker="NSRGY")
    demo_watchlist_stock_22 = WatchlistStock(watchlist_id=4, ticker="QSR")
    demo_watchlist_stock_23 = WatchlistStock(watchlist_id=4, ticker="SBUX")
    demo_watchlist_stock_24 = WatchlistStock(watchlist_id=5, ticker="SFM")
    demo_watchlist_stock_25 = WatchlistStock(watchlist_id=5, ticker="SPTN")
    demo_watchlist_stock_26 = WatchlistStock(watchlist_id=5, ticker="HLF")
    demo_watchlist_stock_27 = WatchlistStock(watchlist_id=6, ticker="H")
    demo_watchlist_stock_28 = WatchlistStock(watchlist_id=6, ticker="MAR")
    demo_watchlist_stock_29 = WatchlistStock(watchlist_id=6, ticker="IHG")
    demo_watchlist_stock_30 = WatchlistStock(watchlist_id=7, ticker="CRC")
    demo_watchlist_stock_31 = WatchlistStock(watchlist_id=7, ticker="HMPT")
    demo_watchlist_stock_32 = WatchlistStock(watchlist_id=7, ticker="GNW")
    demo_watchlist_stock_33 = WatchlistStock(watchlist_id=8, ticker="ALKS")
    demo_watchlist_stock_34 = WatchlistStock(watchlist_id=8, ticker="AMBA")
    demo_watchlist_stock_35 = WatchlistStock(watchlist_id=8, ticker="SEDG")
    demo_watchlist_stock_36 = WatchlistStock(watchlist_id=8, ticker="FIVE")
    demo_watchlist_stock_37 = WatchlistStock(watchlist_id=8, ticker="MOS")
    demo_watchlist_stock_38 = WatchlistStock(watchlist_id=9, ticker="MELI")
    demo_watchlist_stock_39 = WatchlistStock(watchlist_id=9, ticker="EBAY")
    demo_watchlist_stock_40 = WatchlistStock(watchlist_id=9, ticker="WMT")
    demo_watchlist_stock_41 = WatchlistStock(watchlist_id=9, ticker="GS")
    demo_watchlist_stock_42 = WatchlistStock(watchlist_id=9, ticker="VOO")
    demo_watchlist_stock_43 = WatchlistStock(watchlist_id=9, ticker="FCNTX")

    db.session.add(demo_watchlist_stock_1)
    db.session.add(demo_watchlist_stock_2)
    db.session.add(demo_watchlist_stock_3)
    db.session.add(demo_watchlist_stock_4)
    db.session.add(demo_watchlist_stock_5)
    db.session.add(demo_watchlist_stock_6)
    db.session.add(demo_watchlist_stock_7)
    db.session.add(demo_watchlist_stock_8)
    db.session.add(demo_watchlist_stock_9)
    db.session.add(demo_watchlist_stock_10)
    db.session.add(demo_watchlist_stock_11)
    db.session.add(demo_watchlist_stock_12)
    db.session.add(demo_watchlist_stock_13)
    db.session.add(demo_watchlist_stock_14)
    db.session.add(demo_watchlist_stock_15)
    db.session.add(demo_watchlist_stock_16)
    db.session.add(demo_watchlist_stock_17)
    db.session.add(demo_watchlist_stock_18)
    db.session.add(demo_watchlist_stock_19)
    db.session.add(demo_watchlist_stock_20)
    db.session.add(demo_watchlist_stock_21)
    db.session.add(demo_watchlist_stock_22)
    db.session.add(demo_watchlist_stock_23)
    db.session.add(demo_watchlist_stock_24)
    db.session.add(demo_watchlist_stock_25)
    db.session.add(demo_watchlist_stock_26)
    db.session.add(demo_watchlist_stock_27)
    db.session.add(demo_watchlist_stock_28)
    db.session.add(demo_watchlist_stock_29)
    db.session.add(demo_watchlist_stock_30)
    db.session.add(demo_watchlist_stock_31)
    db.session.add(demo_watchlist_stock_32)
    db.session.add(demo_watchlist_stock_33)
    db.session.add(demo_watchlist_stock_34)
    db.session.add(demo_watchlist_stock_35)
    db.session.add(demo_watchlist_stock_36)
    db.session.add(demo_watchlist_stock_37)
    db.session.add(demo_watchlist_stock_38)
    db.session.add(demo_watchlist_stock_39)
    db.session.add(demo_watchlist_stock_40)
    db.session.add(demo_watchlist_stock_41)
    db.session.add(demo_watchlist_stock_42)
    db.session.add(demo_watchlist_stock_43)

    db.session.commit()


def undo_watchlist_stocks():
    db.session.execute('TRUNCATE watchlist_stocks RESTART IDENTITY CASCADE;')
    db.session.commit()