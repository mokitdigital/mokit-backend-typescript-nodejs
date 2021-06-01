"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    timestamps: true,
});
exports.default = mongoose_1.model('User', UserSchema);
