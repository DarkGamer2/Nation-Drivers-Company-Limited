const Admin=require("../models/Admin");
const bcrypt=require("bcryptjs");
const localStrategy=require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((adminUserName, adminPassword, done) => {
      Admin.findOne({ adminUserName: adminUserName }, (err, admin) => {
        if (err) throw err;
        if (!admin) return done(null, false);
        bcrypt.compare(adminPassword, admin.adminPassword, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, admin);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((admin, cb) => {
    cb(null, admin.id);
  });
  passport.deserializeUser((id, cb) => {
    Admin.findOne({ _id: id }, (err, admin) => {
      const userInformation = {
        username: admin.username,
      };
      cb(err, userInformation);
    });
  });
};