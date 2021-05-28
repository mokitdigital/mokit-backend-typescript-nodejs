"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var AuthSchema = new mongoose_1.Schema({
    userName: String,
    passWord: String
});
AuthSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('passWord')) {
        return next();
    }
    bcryptjs_1.default.genSalt(function (_err, salt) {
        if (typeof user.passWord !== 'undefined') {
            bcryptjs_1.default.hash(user.passWord, salt, function (_err, hash) {
                user.passWord = hash;
                next();
            });
        }
    });
});
exports.default = mongoose_1.model('Auth', AuthSchema);
