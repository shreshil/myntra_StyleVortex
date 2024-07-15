import json
import openai

# Load preprocessed data from the file
with open('preprocessed_data.json', 'r') as f:
    trending_texts = json.load(f)

openai.api_key = 'YOUR_OPENAI_API_KEY'

def generate_theme(trends):
    prompt = f"Generate a creative styling contest theme using the following trends: {', '.join(trends)}"
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=50
    )
    return response.choices[0].text.strip()

generated_themes = [generate_theme(trending_texts) for _ in range(5)]

# Save generated themes to a file
with open('themes.json', 'w') as f:
    json.dump(generated_themes, f)

print("Generated themes saved to themes.json")
