import os
from openai import OpenAI
from dotenv import load_dotenv

# def transcribe_audio(audio_file):
load_dotenv()
API_KEY = os.getenv('OPENAI_API_KEY')
client = OpenAI()
audio_file = open("audio.mp3","rb")
def transcribe_audio(client):
  transcribed = client.audio.transcriptions.create(
    model="whisper-1",
    file=audio_file
  )
  print (transcribed)
transcribe_audio(client)