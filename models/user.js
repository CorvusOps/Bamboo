var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema({
    email: { type: String, lowercase: true },
    password: { type: String, required: true },
    name: { first: String, last: String },
    // provider: { type: String, default: 'local' },
    // role: { type: Number, default: 0 },
    // bank_name: { type: String, default: '' },
    // bank_account_name: { type: String, default: '' },
    // bank_account_number: { type: String, default: '' },
    // permissions: []
});

UserSchema.pre('save', function(next) {
    if (this.isNew) {
        this.constructor.find({ email: this.email })
            .exec((err, users) => {
                if (err) { next(err); }

                if (users.length > 0) { next(new Error('Email already gotten')); }
                else { next() ; }
            });
    } else { next(); }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// module.exports.changePassword = (user, callback) => {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(user.password, salt, (err, hash) => {
//             if (err) throw err;
//             user.password = hash;
//             user.save(callback);
//         });
//     });
// }

// module.exports.comparePassword = (candidatePassword, hash, callback) => {
//     bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//         if (err) { callback(err, false); }
//         callback(null, isMatch);
//     });
// }