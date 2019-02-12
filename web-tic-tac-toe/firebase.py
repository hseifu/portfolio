import pyrebase

config = {
    "apiKey": "AIzaSyCOl6peYBI0TpHFXg3qDeC1yXqC8AyEjio",
    "authDomain": "tic-tac-toe-297b2.firebaseapp.com",
    "databaseURL": "https://tic-tac-toe-297b2.firebaseio.com",
    "projectId": "tic-tac-toe-297b2",
    "storageBucket": "tic-tac-toe-297b2.appspot.com",
    "messagingSenderId": "337710582270"
}

firebase = pyrebase.initialize_app(config)

database = firebase.database()