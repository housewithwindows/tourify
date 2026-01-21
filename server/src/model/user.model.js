const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Fullname is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    photo: String,
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user',
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password must be at least 6 characters'],
        select: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationCode: String,
    verificationCodeExpires: Date,
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Compare passwords
userSchema.methods.comparePasswords = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

// Create verification code
userSchema.methods.createVerificationCode = function() {
    const code = crypto.randomBytes(12).toString('hex');
    this.verificationCode = code;
    return code;
}

const User = mongoose.model('Users', userSchema);

module.exports = User;
