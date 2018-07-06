module.exports = (envName) => {
  if (envName === 'production') {
    return "'https://autofleet-demo-server.herokuapp.com'";
  }

  return "'http://localhost:8080'";
};
