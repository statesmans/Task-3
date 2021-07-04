const db = require('../helpers/db');
const NotFoundError = require('../helpers/not-found.error');

class NotesRepository {

  findAll() {
    return db.notes;
  }

  findById(id) {
    return db.notes.find(n => n.id === id);
  }

  create(data) {
    const entity = {
      ...data,
      id: db.nextId,
      createData: new Date(),
    };
    db.notes.push(entity);
    return entity;
  }

  update(id, data) {
    const note = db.notes.find(n => n.id === id);

    if (!note) {
      throw new NotFoundError('Note not found');
    }

    return Object.assign(note, data);
  }

  deleteById(id) {
    const note = db.notes.find(n => n.id === id);

    if (!note) {
      throw new NotFoundError('Note not found');
    }

    db.notes = db.notes(n => n.id !== id);
  }

}

module.exports = NotesRepository;