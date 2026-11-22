from flask import Flask, jsonify
import json

app = Flask(__name__)

def load_dictionary():
    file_path = "JS-assignments/mod5/dictionary.json"
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)

@app.route("/translate/<word>", methods=["GET"])
def translate(word):
    dictionary = load_dictionary()

    word = word.lower()

    if word in dictionary:
        return jsonify({
            "English": word, "Finnish": dictionary[word]
        })

    return jsonify({
        "error": "Word not found"
    }), 404

@app.route("/words", methods=["GET"])
def get_words():
    dictionary = load_dictionary()

    return jsonify(list(dictionary.keys()))


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, debug=True)
