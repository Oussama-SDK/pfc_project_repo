function getHealth(_req, res) {
  return res.json({ status: 'ok' });
}

module.exports = {
  getHealth,
};
