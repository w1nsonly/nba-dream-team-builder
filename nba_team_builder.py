from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# Load CSV into a datafram
data = pd.read_csv("nba_2016_2017_stats.csv")

@app.route('/')
def index():
    return "Welcome to the NBA Dream Team API!"


# Route to filter players by positions
@app.route('/positions')
def get_positions():
    positions = [
        "PG", "SG", "SF", "PF", "C"
    ]
    return jsonify(positions)

# Route to filter players by team (ex: GSW, OKC)
@app.route('/teams')
def get_teams():
    teams = [
        "ATL", "BOS", "BRK", "CHI", "CHO", "CLE", "DAL", "DEN", "DET", "GSW",
        "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
        "OKC", "ORL", "PHI", "PHO", "POR", "SAC", "SAS", "TOR", "UTA", "WAS"
    ]
    return jsonify(teams)

@app.route('/players', methods=['GET'])
def get_players():
    team = request.args.get('team')
    pos = request.args.get('pos')
    min_age = request.args.get('min_age', type=int)
    max_age = request.args.get('max_age', type=int)

    # Start with the full dataset
    filtered_data = data

    # Filter by team if provided
    if team:
        filtered_data = filtered_data[filtered_data['Team'] == team]

    # Filter by position if provided
    if pos:
        filtered_data = filtered_data[filtered_data['Pos'] == pos]

    # Filter by age if provided
    if min_age is not None:
        filtered_data = filtered_data[filtered_data['Age'] >= min_age]
    if max_age is not None:
        filtered_data = filtered_data[filtered_data['Age'] <= max_age]

    # Convert to JSON
    return jsonify(filtered_data.replace({np.nan: None}).to_dict(orient='records'))



if __name__ == '__main__':
    app.run(debug=True)
    



    

    