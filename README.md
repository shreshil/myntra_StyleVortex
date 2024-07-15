# myntra_StyleVortex
this Myntra styling contest StyleVortex project is made by team SHRATIKA. 
-Shreya Sinha(B.TECH CSE 2ND YEAR)
-Kratika Soni(B.TECH CSE 2ND YEAR)
 STYLE VORTEX:Seasonal fashion styling contest by MYNTRA.
 "Unleash the inner stylist and showcase unique Gen Z fashion sense in our exciting styling contest!
 Participate and stand a chance to win fantastic rewards and gain recognition for your creative flair."

This project consist:

-Theme Generation ;based on any trending topic, theme can be generated .we can fetch data using keywords, hashtags etc. from social media an feed it to prompt to generate contest theme.
for this prototype, we used fake data already added in json.

-myntra(User Interface):this is a prototype how users can participate,by filling out form,adding their photo and tag products they used from myntra my orders section.on submission, 
we have shown how a post will look.

-Return:top users with most number no. of likes needs to be checked before declaration of winner .we can check if the tagged products are returned or not ,and eligible for the reward.

=>>FOR THEME GENERATION:
## Prerequisites

List of software and versions needed to run your project:
- Python 3.x
- Flask
- Other dependencies...

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows use `venv\Scripts\activate`
    ```

3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Set up the OpenAI API key (if required):
    ```bash
    export OPENAI_API_KEY='your_openai_api_key'  # On Windows use `set OPENAI_API_KEY=your_openai_api_key`
    ```

## Usage

Instructions on how to run the project:

1. Run the Flask application:
    ```bash
    python app.py
    ```

2. Access the application in your web browser at:
    ```plaintext
    http://127.0.0.1:5000/
    ```

## API Endpoints


- **GET /generate_theme**: Retrieves generated themes.
  ```bash
  curl http://127.0.0.1:5000/generate_theme

  
==>FOR RETURNS:
## Prerequisites

- node.js
- npm
- Other dependencies...

## Installation
  1. Check if Node.js and npm are installed correctly by typing:
```bash
node -v
npm -v
```

## Usage


1. Navigate to the root directory of your project where package.json is located.
and install Dependencies:


2.Run the following command to install dependencies listed in package.json:
```bash
npm install
```
3.check  whether node_modules is installed and Run the Server:

```bash
node server.js
```
4.Run directory an navigate through pages to check .
