const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      console.log('no user id provided');
      res.redirect('/login');
    } else {
      next();
    }
};
  
module.exports = withAuth;