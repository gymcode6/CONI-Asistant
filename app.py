from Audio_Transcriber import Transcriber
from Voice_synthesizer import Synthesizer
from Language_model import LLM
import os
from openai import OpenAI
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
from elevenlabs.client import ElevenLabs

app = Flask(__name__)
CORS(app) 

load_dotenv()
AI_API_KEY = os.getenv('OPENAI_API_KEY')
XI_API_KEY = os.getenv('XI_API_KEY')
clientXI = ElevenLabs(
    api_key=XI_API_KEY,
)
clientAI = OpenAI()
#audio_file = open("audio.mp3","rb")



 

@app.route('/', methods=['POST'])
def asistente():
    if 'audio' not in request.files:
        return 'No se recibió ningún archivo de audio', 400
    
    audio_file = request.files.get('audio')
    transcribed_text = Transcriber.transcribe_audio(clientAI, audio_file)

    responseTx = LLM.completion(clientAI, transcribed_text)
    
    audio_stream = Synthesizer.synthesize(clientXI, responseTx)
    
    audio_data = audio_stream.getvalue()
    responseStr = base64.b64encode(audio_data).decode('utf-8')
    
    responseJson = {
        'result': 'ok',
        'text': responseTx,
        'file': responseStr
    }

    return jsonify(responseJson)



@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    # Aquí procesa la información del usuario (por ejemplo, guarda en una base de datos)
    # data['username'], data['email'], data['password']
    # Puedes usar SQLAlchemy para interactuar con la base de datos

    # Devuelve una respuesta (por ejemplo, un mensaje de éxito)
    return jsonify({'message': 'Usuario registrado exitosamente!'})



if __name__ == '__main__':
    app.run(debug=True)