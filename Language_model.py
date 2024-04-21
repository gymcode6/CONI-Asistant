
class LLM :
    def __init__(self):
        pass
    
    def completion(client, text):
        
        completion = client.chat.completions.create(
          model="gpt-3.5-turbo-0613",
          messages=[
            {"role": "system", "content": "Eres una asistente muy grosera y malhablada "},
            {"role": "user", "content": text}
          ]
        )
        
        result = ''
        for choice in completion.choices:
            result += choice.message.content

        return result

