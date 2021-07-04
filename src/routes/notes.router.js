const express = require('express');
const router = express.Router();
const { createNoteValidator } = require('../validators/create-note.validator');
const { updateNoteValidator } = require('../validators/update-note.validator');

const NotesService = require('../services/notes.service');
const { getStatus } = require('../helpers/helpers');

class NotesRouter {

  constructor() {
    this.notesService = new NotesService();
  }

  generate() {
    // get all
    router.get('/notes', (req, res) => {
      const notes = this.notesService.findAll();
      res.json(notes);
    });
    // get by id
    router.get('/notes/:id(\\d+)', (req, res) => {
      const noteId = parseInt(req.params.id, 10);
      const note = this.notesService.findById(noteId);

      if (!note) {
        res.status(404).json({ success: false, error: 'Note not found' });
        return;
      }

      res.json(note);
    });
    // creating of note
    router.post('/notes', async (req, res) => {
      const data = req.body;

      try {
        await createNoteValidator.validate(data, { strict: true });
        const note = this.notesService.create(data);
        res.status(201).json(note);
      } catch (err) {
        res.json({ success: false, name: err.name, errors: err.errors });
      }
    });
    // update note
    router.patch('/notes/:id', async (req, res) => {
      const data = req.body;
      const id = parseInt(req.params.id, 10);
      console.log('data = ', data)
      try {
        await updateNoteValidator.validate(data, { strict: true });
        const updatedNote = this.notesService.update(id, data);
        res.json(updatedNote);
      } catch (err) {
        const status = getStatus(err);
        res.status(status).json({ success: false, error: err })
      }
    })
    // delete note
    router.delete('/notes/:id', (req, res) => {
      const id = parseInt(req.params.id, 10);
      try {
        const note = this.notesService.deleteById(id);
        res.json({ success: true });
      } catch (err) {
        res.status(err.status || 200).json({ success: false, error: err })
      }      
    });
    router.get('/notes/stats', (_req, res) => {
      const stats = this.notesService.calcStats();
      res.json(stats);
    });
    return router;
  }

}

module.exports = NotesRouter;