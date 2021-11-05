from app.models import portfolio
from flask import Blueprint, request
from ..models import Watchlist, WatchlistStock, db
from datetime import datetime

watchlist_routes = Blueprint('watchlists', __name__)


@watchlist_routes.route('')
def watchlists():
    watchlists = Watchlist.query.all()
    watchlistStocks = WatchlistStock.query.all()

    return {'watchlists': [ {
        'id' : watchlist.id,
        'name' : watchlist.name,
        'description' : watchlist.description,
        'owner_id' : watchlist.owner.id,
        'stocks' : [ watchlistStock.ticker for watchlistStock in watchlistStocks if watchlistStock.watchlist_id == watchlist.id]
    } for watchlist in watchlists]}


@watchlist_routes.route('', methods=['POST'])
def new_watchlist():
    print('*'*100)
    print(request.json)
    watchlist = Watchlist (
        name=request.json['name'],
        description=request.json['description'],
        owner_id=int(request.json['owner_id']),
        createdat=datetime.strptime(request.json['createdat'][:-1], '%Y-%m-%dT%H:%M:%S.%f')
    )

    db.session.add(watchlist)
    db.session.commit()

    return watchlist.to_dict()


@watchlist_routes.route('/<int:id>', methods=['PUT'])
def edit_watchlist(id):
    watchlist = Watchlist.query.get(id)
    watchlist.name = request.json['name']
    watchlist.description = request.json['description']
    watchlist.owner_id = int(request.json['owner_id'])

    db.session.add(watchlist)
    db.session.commit()
    
    return watchlist.to_dict()


@watchlist_routes.route('/<int:id>', methods=['DELETE'])
def delete_watchlist(id):
    watchlist = Watchlist.query.get(id)

    db.session.delete(watchlist)
    db.session.commit()

    return {}
