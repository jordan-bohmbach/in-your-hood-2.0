from sqlalchemy.orm import relationship
from .db import db
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Numeric, DateTime

class Portfolio(db.Model):
    __tablename__ = 'portfolios'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100))
    current_cash_balance = db.Column(db.Numeric, nullable=False)
    starting_cash_balance = db.Column(db.Numeric, nullable=False)
    owner_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    createdat = db.Column(db.DateTime, nullable=False)

    owner = relationship("User", back_populates="portfolios")
    trades = relationship("Trade", back_populates="portfolio", cascade='all, delete')

    @property
    def get_balance(self):
        return self.current_cash_balance

    def to_dict(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'description' : self.description,
            'current_cash_balance' : str(self.current_cash_balance),
            'starting_cash_balance' : str(self.starting_cash_balance),
            'owner_id' : self.owner_id,
            'createdat' : self.createdat
        }