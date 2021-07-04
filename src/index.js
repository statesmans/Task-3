const express = require('express');
const bodyParser = require('body-parser');
const NotesRouter = require('./routes/notes.router');

const notesRouter = new NotesRouter();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(notesRouter.generate());

app.listen('3010', () => {
  console.log('API was started')
})