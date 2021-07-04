const getStatus = (err) => {
  return err.status || (err.name === 'ValidationError' ? 400 : 200);
}

module.exports = {
  getStatus,
};