const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: "Meme"
    }],
    purchases: [{
        type: Schema.Types.ObjectId,
        ref: "Meme"
    }]
});

// presave hook to hash password before saving to DB
userSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

// adds .auth method to userSchema to check password on login
userSchema.methods.auth = function(passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) {
            console.log(err);
            return cb(false);
        } else {
            return cb(isMatch);
        }
    });
};

// adds .withoutPassword method to userSchema to send back user object w/o the password
userSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
}


module.exports = mongoose.model("User", userSchema);
