const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");
const path = require("path");
const { User, Event, Shop, Comment } = require("../db/models");

const router = express.Router();

const avatarsPath = "./img/usersAvatars";

const avatarsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, avatarsPath);
  },

  filename: (req, file, cb) => {
    cb(null, `${file.originalname}.jpg`);
  },
});

const avatarsUpload = multer({ storage: avatarsStorage });

router.get("/", async (req, res) => {
  try {
    // const user = await User.findOne({
    //   where: { id: req.session.user.id },
    //   include: [Event, Shop, Comment],
    // });

    return res.json(req.session.user);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, hashpass } = req.body;
    if (!username || !email || !hashpass) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    const pass = await bcrypt.hash(hashpass, 2);
    const [currUser, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { username, email, hashpass: pass },
    });
    if (!isCreated) {
      return res.status(403).json({ message: "User already exist" });
    }
    req.session.user = {
      id: currUser.id,
      username: currUser.username,
      email: currUser.email,
    };
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, hashpass } = req.body;
    if (!email || !hashpass) {
      return res
        .status(400)
        .json({ message: "Все поля должны быть заполнены" });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        message: "Пользователя с таким адресом электронной почты не существует",
      });
    }
    const compare = await bcrypt.compare(hashpass, user.hashpass);
    if (compare) {
      req.session.user = { id: user.id, username: user.username };
    } else {
      return res.status(400).json({ message: "Неправильно набран пароль" });
    }
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

router.get("/check", (req, res) => {
  try {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    return res.sendStatus(401);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

router.get("/logout", (req, res) => {
  try {
    req.session.destroy();
    return res.clearCookie("sid").sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});
router.put(
  "/upload-avatar",
  async (req, res) => {
    try {
      const { avatar } = req.body;
      const userid = req.session.user.id;
      const user = await User.findByPk(userid);
      user.avatar = avatar;
      user.save();
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  }
);

router.get("/img/usersAvatars/:username.jpg", (req, res) => {
  try {
    const { username } = req.params;
    return res.sendFile(
      path.join(__dirname, `../img/usersAvatars/${username}.jpg`)
    );
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
