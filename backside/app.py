# Import core libraries
from flask import Flask
from flask_cors import CORS
from flask_restful import Api
import os

# Import libraries
from endpoints.github import Github

# Init App
app= Flask(__name__)
app.app_context().push()

# Init additional
api = Api(app)
CORS(app)

api.add_resource(Github, '/github/<string:user>', methods=['GET'])

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, port=port)
