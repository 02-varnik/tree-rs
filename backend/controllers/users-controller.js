//extracting the user modal
const bcrypt = require("bcryptjs");
const { ReturnDocument } = require("mongodb");
const User = require("../models/user");

//post signin request function
const addUser = async (req, res, next) => {
  //destructuring and storing requested data
  const { name, email, password, type } = req.body;
  console.log(req.body);

  //finding existing user with same email;
  let existingUserEmail;
  try {
    existingUserEmail = await User.findOne({ email: email });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    return;
  }

  //checking existing userEmail
  if (existingUserEmail) {
    console.log("A user with this email already exists");
    console.log(existingUserEmail);
    res.status(422).json({ error: "A user with this email already exists" });
    return;
  }

  async function hashPassword() {
    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });

    return hashedPassword;
  }

  const hashedPassword = await hashPassword();

  //creating newUser object
  const newUser = new User({
    username: name,
    email,
    password: hashedPassword,
    type: type,
  });

  //add newUser to database
  try {
    await newUser.save();
    console.log("added user");
    console.log(newUser);
    //resending data with 'OK' status code
    res.status(201).json({ user: newUser });
    // res.status(201).json({user : newUser.toObject({ getters: true})})     // toObject() is method in moongoose
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    return;
  }
};

//post login request function
const verifyUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Loggin in failed, please try again later" });
    return;
  }

  if (!existingUser) {
    console.log("No user exists with this email, please sign up");
    res
      .status(401)
      .json({ error: "No user exists with this email, please sign up" });
    return;
  }

  async function checkHashPassword() {
    const isMatching = await new Promise((resolve, reject) => {
      console.log(password,existingUser.password);
      bcrypt.compare(
        password,
        existingUser.password,
        function (error, isMatch) {
          if (error) reject(error);
          resolve(isMatch);
        }
      );
    });

    return isMatching;
  }

  const isPassMatching = await checkHashPassword();
  console.log(isPassMatching);

  if (!isPassMatching) {
    console.log("Invalid credentials, could not log you in.");
    res
      .status(401)
      .json({ error: "Invalid credentials, could not log you in" });
    return;
  }

  console.log("User found");
  console.log(existingUser);
  res.status(201).json({
    message: "Logged in!",
    user: existingUser,
  });
  return;
};

exports.signup = addUser;
exports.login = verifyUser;
