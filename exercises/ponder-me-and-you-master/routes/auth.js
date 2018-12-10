const express = require("express");
const passport = require("passport");
const Strategy = require("passport-local");
const jwt = require("jsonwebtoken");
const settings = require("../settings");
const User = require("../models/user");
const authRoutes = express.Router();

passport.use(new Strategy((usernameAttempt, passwordAttempt, done) => {
    User.findOne({username: usernameAttempt}, (err, currentUser) => {
        if (err) {
            done(err, false);
        } else if (currentUser === null) {
            done(null, false);
        } else {
            currentUser.auth(passwordAttempt, isCorrect => {
                done(null, isCorrect);
            });
        }
    });
}));


authRoutes.use(passport.initialize());

// ROUTES \\
authRoutes.post("/signup", (req, res) => {
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) {
            res.status(500).send({
                success: false,
                err
            });
        } else if (existingUser !== null) {
            res.status(400).send({
                success: false,
                err: "Sorry, this username is already taken."
            });
        } else {
            const newUser = new User(req.body);
            newUser.save((err, user) => {
                if (err) {
                    res.status(500).send({
                        success: false,
                        err
                    });
                } else {
                    res.status(201).send({
                        success: true,
                        user: user.withoutPassword(),
                        token: jwt.sign(user.withoutPassword(), settings.secret)
                    });
                }
            });
        }
    });
})

authRoutes.post("/login", passport.authenticate("local", {session: false}), (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (err) {
            res.status(500).send({
                success: false,
                err
            });
        } else if (user === null) {
            res.status(404).send({
                success: false,
                err: "Sorry, this username was not found."
            });
        } else {
            res.status(201).send({
                success: true,
                user: user.withoutPassword(),
                token: jwt.sign(user.withoutPassword(), settings.secret)
            });
        }
    });
});

module.exports = authRoutes;
