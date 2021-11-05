from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import StringField, IntegerField, SubmitField
from app.models import Watchlist

class NewWatchlist(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    owner_id = IntegerField('owner_id', validators=[DataRequired()])
    submit = SubmitField('Submit')