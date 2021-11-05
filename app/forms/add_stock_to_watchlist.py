from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import StringField, SubmitField
from app.models import WatchlistStock

class NewStockToWatchlistForm(FlaskForm):
    ticker = StringField('ticker', validators=[DataRequired()])
    submit = SubmitField('submit')