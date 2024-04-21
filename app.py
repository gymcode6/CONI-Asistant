from Audio_Transcriber import Transcriber
import os
from openai import OpenAI
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS

load_dotenv()
API_KEY = os.getenv('OPENAI_API_KEY')
client = OpenAI()
#audio_file = open("audio.mp3","rb")


app = Flask(__name__)
CORS(app) 
 
@app.route('/', methods=['POST'])
def transcribe():
    if 'audio' not in request.files:
        return 'No se recibió ningún archivo de audio', 400

    
    audio_file = request.files.get('audio')

    transcribed_text = Transcriber.transcribe_audio(client, audio_file)

    return jsonify({'text': transcribed_text})

if __name__ == '__main__':
    app.run(debug=True)
