
from flask import Flask, jsonify, render_template
import json

app = Flask(__name__)


def load_themes():
    try:
        with open('themes.json', 'r') as f:
            themes = json.load(f)
        return themes
    except FileNotFoundError:
        return []

@app.route('/generate_theme', methods=['GET'])
def generate_theme():
    themes = load_themes()
    return jsonify({'themes': themes})

@app.route('/')
def index():
    themes = load_themes()
    return render_template('index.html', themes=themes)

if __name__ == '__main__':
    app.run(debug=True)
