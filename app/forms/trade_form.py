from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import DecimalField, StringField, IntegerField, DateTimeField, SubmitField
from app.models import Trade

class NewTrade(FlaskForm):
    execution_price = DecimalField('execution_price', validators=[DataRequired()])
    execution_type = StringField('execution_type', validators=[DataRequired()])
    quantity = DecimalField('quantity', validators=[DataRequired()])
    transaction_date = DateTimeField('transaction_date', validators)
    submit = SubmitField('submit')
    edit = SubmitField('edit')
    delete = SubmitField('delete')