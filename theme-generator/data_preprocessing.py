import json

with open('fake_trending_data.json', 'r') as f:
    trending_data = json.load(f)

trending_texts = [trend['name'] for trend in trending_data]


with open('preprocessed_data.json', 'w') as f:
    json.dump(trending_texts, f)

print("Data preprocessed and saved to preprocessed_data.json")
