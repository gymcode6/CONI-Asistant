import os
from dotenv import load_dotenv
import requests
    
class Synthesizer :
    def __init__(self):
        load_dotenv()
        self.key = os.getenv('ELEVENLABS_API_KEY')
    
    def synthesize(self, text) :
            CHUNK_SIZE = 1024
            url = "https://api.elevenlabs.io/v1/text-to-speech/9YuUJveN0kf40N1jOoJW"

            headers = {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": self.key
            }

            data = {
            "text": text,
            "model_id": "eleven_multilingual_v1",
            "voice_settings": {
                "stability": 0.7,
                "similarity_boost": 1
            }
            }
                        
            response = requests.post(url, json=data, headers=headers)

            synthesized = 'output.mp3'
            
            output_path = os.path.join('./coni-asistant/src/static/', synthesized)
            
            if os.path.exists(output_path):
                os.remove(output_path)
                
            with open(output_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
                    if chunk:
                        f.write(chunk)

            return synthesized
            
            
            
        

        

