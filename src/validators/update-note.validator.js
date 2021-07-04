const yup = require('yup');

const updateNoteValidator = yup.object().shape({
  name: yup.string(),
  category: yup.string(),
  content: yup.string(),
  schedule: yup.array().of(yup.string()),
  isArchived: yup.boolean(),
  type: yup.string(),
  isEditable: yup.boolean(),
})

module.exports = {
  updateNoteValidator,
};