class Db {
  constructor() {
    this.notes = [
      {
        id: 3,
        name: 'Shopping list',
        createData: 'April 20, 2021',
        category: 'Task',
        content: 'Tomatoes, Bread',
        schedule: [],
        isArchived: false,
        type: 'task',
        isEditable: false,
      },
      {
        id: 4,
        name: 'Shopping list',
        createData: 'April 27, 2021',
        category: 'Task',
        content: 'Tomatoes, Bread',
        schedule: [],
        isArchived: false,
        type: 'task',
        isEditable: false,
      },
      {
        id: 5,
        name: 'The theory of evolution',
        createData: 'May 05, 2021',
        category: 'Random Thought',
        content: 'Tomatoes, Bread',
        schedule: [],
        isArchived: false,
        type: 'randomThought',
        isEditable: false,
      },
      {
        id: 6,
        name: 'New feature',
        createData: 'May 07, 2021',
        category: 'Idea',
        content: 'Tomatoes, Bread',
        schedule: [],
        isArchived: false,
        type: 'idea',
        isEditable: false,
      },
      {
        id: 7,
        name: 'William Gaddis',
        createData: 'May 15, 2021',
        category: 'Quote',
        content: 'Tomatoes, Bread',
        schedule: [],
        isArchived: false,
        type: 'quote',
        isEditable: false,
      },
      {
        id: 2,
        name: 'Books',
        createData: 'April 20, 2021',
        category: 'Task',
        content: 'Tomatoes, Bread',
        schedule: [],
        isArchived: false,
        type: 'task',
        isEditable: false,
      },
      {
        id: 1,
        name: 'Training',
        createData: 'April 20, 2021',
        category: 'Task',
        content: 'Tomatoes, Bread',
        schedule: [],
        isArchived: true,
        type: 'task',
        isEditable: false,
      },
    ];
  }

  get nextId() {
    return this.notes[this.notes.length - 1].id + 1;
  }

}

const db = new Db();

module.exports = db;
