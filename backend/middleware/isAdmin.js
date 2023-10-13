const isAdmin = (req, res, next) => {
  if (req?.user?.role === 'admin') return next();
  return res.sendStatus(401);
};

module.exports = isAdmin;
