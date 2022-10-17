# Import libcore
from flask_restful import Resource

# Import libadd
import json, requests

class Github(Resource):
    def get(self, user):
        url = 'http://api.github.com/users/{}/repos'.format(user)
        req = requests.get(url)
        data = req.content
        output = json.loads(data)
        return output
