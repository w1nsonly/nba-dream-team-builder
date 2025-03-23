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

@app.route('/players/position', methods=['GET'])
def filter_by_position():
    pos = request.args.get('pos')
    filtered = data[data['Pos'] == pos] if pos else data
    return jsonify(filtered.replace({np.nan: None}).to_dict(orient='records'))



# Route to filter players by team (ex: GSW, OKC)
@app.route('/teams')
def get_teams():
    teams = [
        "ATL", "BOS", "BRK", "CHI", "CHO", "CLE", "DAL", "DEN", "DET", "GSW",
        "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
        "OKC", "ORL", "PHI", "PHO", "POR", "SAC", "SAS", "TOR", "UTA", "WAS"
    ]
    return jsonify(teams)

@app.route('/players/team', methods=['GET'])
def filter_by_team():
    team = request.args.get('team')
    filtered = data[data['Team'] == team] if team else data
    return jsonify(filtered.replace({np.nan: None}).to_dict(orient='records'))

# Route to filter players by age
@app.route('/players/age', methods=['GET'])
def filter_by_age():
    min_age = request.args.get('min_age', type=int) # putting min_age as an int
    max_age = request.args.get('max_age', type=int) # putting max_age as an int

    # Validate input: Ensure at least one parameter is provided
    if min_age is None and max_age is None:
        return jsonify({"error": "Provide at least 'min_age' or 'max_age' parameters"}), 400
    
    if min_age is not None and max_age is not None:
        filtered_data = data[(data['Age'] >= min_age) & (data['Age'] <= max_age)]
    elif min_age is not None:
        filtered_data = data[data['Age'] >= min_age]
    elif max_age is not None:
        filtered_data = data[data['Age'] <= max_age]


    # Return the filtered data as JSON
    return jsonify(filtered_data.to_dict(orient='records'))
    

# Route to filter players by stats
@app.route('/players/top', methods=['GET'])
def get_top_players():
    stat = request.args.get('stat') # stats to sort are PTS, TRB, and AST
    top_n = request.args.get('top_n', default=10, type=int) # Number of players to return

    # Validate the stat parameter
    if stat not in ['PTS', 'TRB', 'AST']:
        return jsonify({"error": "Invalid stat. Use 'PTS', 'TRB', or 'AST'."}), 400
    
    # Sort the data by the specified stat in descending order
    sorted_data = data.sort_values(by=stat, ascending=False)

    # Select the top N players
    top_players = sorted_data.head(top_n)

    # Return the top players
    return jsonify(top_players.to_dict(orient='records'))



if __name__ == '__main__':
    app.run(debug=True)
    



    

    