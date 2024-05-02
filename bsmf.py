import dependencies
import json
import requests
from decouple import config
from datetime import datetime
from flask import Flask, jsonify
from flask_cors import CORS

BASE_URL = config("BASE_URL")
MATCHES_URL_LL = config("MATCHES_URL_LL")
MATCHES_URL_LK = config("MATCHES_URL_LK")

app = Flask(__name__)

actual_time = datetime.now()
CORS(app, resources = {r"/*" : {"origins": ["https://memmelsdorf-barons.de", "https://memmelsdorfbarons.de",
                                            "http://memmelsdorf-barons.de", "http://memmelsdorfbarons.de",
                                            "https://www.memmelsdorf-barons.de"]}})


@app.route("/nextmatchll/", methods=["GET"])
def next_match_ll():
    ll_matches = requests.get(MATCHES_URL_LL, timeout = 10)
    matches_json = json.loads(ll_matches.text)
    our_matches_ll = []

    for match in matches_json:
        for match_details in match.items():
            if "Memmelsdorf Barons" in match_details:
                our_matches_ll.append(match)

    for match in our_matches_ll:
        for key, value in match.items():
            if key == "time":
                game_time_str = value
                game_time_str = game_time_str[:-6]
                game_time = datetime.strptime(game_time_str, '%Y-%m-%d %H:%M:%S')
                game_day = game_time.strftime('%d.%m.%Y')
                game_hour = game_time.strftime('%H:%M')

                if game_time > actual_time:
                    return jsonify(game_day, game_hour, match['home_team_name'], match['away_team_name'])

@app.route("/nextmatchlk/", methods=["GET"])                
def next_match_lk():
    lk_matches = requests.get(MATCHES_URL_LK, timeout = 10)
    matches_lk_json = json.loads(lk_matches.text)
    our_matches_lk = []

    for match in matches_lk_json:
        for match_details in match.items():
            if "Memmelsdorf Barons  2" in match_details:
                our_matches_lk.append(match)

    for match in our_matches_lk:
        for key, value in match.items():
            if key == "time":
                game_time_str = value
                game_time_str = game_time_str[:-6]
                game_time = datetime.strptime(game_time_str, '%Y-%m-%d %H:%M:%S')
                game_day = game_time.strftime('%d.%m.%Y')
                game_hour = game_time.strftime('%H:%M')

                if game_time > actual_time:
                    return jsonify(game_day, game_hour, match['home_team_name'], match['away_team_name'])
