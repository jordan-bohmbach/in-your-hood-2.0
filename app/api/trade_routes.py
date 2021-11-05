from operator import contains
from app.models import portfolio
from flask import Blueprint, request
from ..models import Trade, db
from datetime import datetime

trade_routes = Blueprint('trades', __name__)


@trade_routes.route('', methods=['POST'])
def new_trade():
    print('*'*30)
    print(request.json['transaction_date'])
    trade = Trade(
        portfolio_id=int(request.json['portfolio_id']),
        ticker=request.json['ticker'],
        execution_price=float(request.json['execution_price']),
        execution_type=request.json['execution_type'],
        quantity=int(request.json['quantity']),
        transaction_date=datetime.strptime(request.json['transaction_date'][:-1],'%Y-%m-%dT%H:%M:%S.%f'),
    )

    db.session.add(trade)
    db.session.commit()

    return trade.to_dict()