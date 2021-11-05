from sqlalchemy.orm import relationship
from .db import db
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Numeric, Date

class Trade(db.Model):
    __tablename__ = 'trades'

    id = db.Column(db.Integer, primary_key=True)
    portfolio_id = db.Column(db.Integer, ForeignKey('portfolios.id'), nullable=False)
    ticker = db.Column(db.String(10), nullable=False)
    execution_price = db.Column(db.Numeric, nullable=False)
    execution_type = db.Column(db.String(10), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    transaction_date = db.Column(db.Date, nullable=False)

    portfolio = relationship("Portfolio", back_populates="trades")

    def to_dict(self):
        return {
            'id' : self.id,
            'portfolio_id' : self.portfolio_id,
            'ticker' : self.ticker,
            'execution_price' : str(self.execution_price),
            'execution_type' : self.execution_type,
            'quantity' : self.quantity,
            'transaction_date' : self.transaction_date
        }
