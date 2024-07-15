import json

fake_trending_data = [
    {"name": "Summertime", "tweet_volume": 15000},
    {"name": "Wednesday Addams", "tweet_volume": 12000},
    {"name": "Gothic", "tweet_volume": 10000},
    {"name": "Casual Wear", "tweet_volume": 8000},
    {"name": "Vintage Style", "tweet_volume": 6000},
    {"name": "gold never gets old", "tweet_volume": 6000},
    {"name": "KPOP gaga", "tweet_volume": 6000},


]

# Save fake trending data to a file
with open('fake_trending_data.json', 'w') as f:
    json.dump(fake_trending_data, f)

print("Fake trending data generated and saved to fake_trending_data.json")
