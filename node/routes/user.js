const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const {isLoggedIn , isNotLoggedIn} = require('../middlewares')

const router = express.Router();
// 회원가입
router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { userId, email, nickName, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { userId } });
    if (exUser) { // 이미 회원가입되어있으면
      return res.redirect('/join?message=이미가입된사용자');
    }
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      userId,
      email,
      nickName,
      password: hash,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});
// 로그인
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (!user) {
      return res.redirect(`/?message=${info.message}`);
    }
    return req.login(user, (err) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      return res.redirect('/');
    });
  })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;