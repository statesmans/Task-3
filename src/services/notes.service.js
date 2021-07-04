const NotesRepository = require('../repositories/notes.repository');

class NotesService {

  constructor() {
    this.notesRepository = new NotesRepository();
  }

  findAll() {
    return this.notesRepository.findAll();
  }

  findById(id) {
    return this.notesRepository.findById(id);
  }

  create(data) {
    return this.notesRepository.create({
      schedule: [],
      isArchived: false,
      isEditable: false,
      ...data,
    });
  }

  update(id, data) {
    return this.notesRepository.update(id, data);
  }

  delete(id) {
    return this.notesRepository.deleteById(id);
  }

  calcStats() {
    const notes = this.findAll();
    const stats = notes.reduce((acc, curr) => {
      if (acc[curr.category] === undefined) {
        acc[curr.category] = {
          active: 0,
          archive: 0
        }
      }
  
      if (curr.isArchived === true) {
        acc[curr.category] = {
          ...acc[curr.category], 
          archive: acc[curr.category].archive + 1
        }
      } else if(curr.isArchived === false){
        acc[curr.category] = {
          ...acc[curr.category], 
          active: acc[curr.category].active + 1
        }
      } 
      return acc
    }, {});
    return stats;
  }

}

module.exports = NotesService;