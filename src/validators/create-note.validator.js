const yup = require('yup');

const createNoteValidator = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  content: yup.string().required(),
  schedule: yup.array().of(yup.string()),
  isArchived: yup.boolean(),
  type: yup.string().required(),
  isEditable: yup.boolean(),
})

module.exports = {
  createNoteValidator,
};