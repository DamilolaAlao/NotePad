# NotePad RESTful API using Node.js, Express, & lowdb

This is a boilerplate for building a notepad  REST APIs using Express & lowdb.

## Table of Contents

- [Installation](#installation)
- [Available Routes](#available-routes)
- [Available Scripts](#available-scripts)

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Start the app using `npm start`

3. After that, go to: `http://localhost:8080/notes/`



### Available routes

| Method   | Resource                  | Description                                                                                                                       |
| :------- | :--------------           | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET`   | `/notes`| Get all the note in the DB. |
| `GET`   | `/notes/:id`| Get a specific note in the DB.|
| `POST`  | `/notes`| Create a new note in the DB. You need to specify in the body a "text" attribute |
| `PATCH` | `/notes/:id`| Update the text of a specific note in the DB. You need to specify in the body a "text" attribute|
| `DELETE`| `/notes/:id`| Delete a note in the DBs|     

### Available scripts

- `dev` - To run the app in dev mode,
- `start` - Run the App
