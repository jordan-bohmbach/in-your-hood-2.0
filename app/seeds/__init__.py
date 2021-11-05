from flask.cli import AppGroup
from .users import seed_users, undo_users
from .portfolios import seed_portfolios, undo_portfolios
from .trades import seed_trades, undo_trades
from .watchlist_stocks import seed_watchlist_stocks, undo_watchlist_stocks
from .watchlists import seed_watchlists, undo_watchlists

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_portfolios()
    seed_trades()
    seed_watchlists()
    seed_watchlist_stocks()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_trades()
    undo_watchlist_stocks()
    undo_portfolios()
    undo_watchlists()

