from sqlalchemy.orm import relationship
from .db import db
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Numeric, Date

class WatchlistStock(db.Model):
    __tablename__ = 'watchlist_stocks'

    id = db.Column(db.Integer, primary_key=True)
    watchlist_id = db.Column(db.Integer, ForeignKey('watchlists.id'), nullable=False)
    ticker = db.Column(db.String(10), nullable=False)

    watchlist = relationship("Watchlist", back_populates="watchlist_stocks")
