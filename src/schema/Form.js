"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var FormSchema = new mongoose_1.Schema({
    nomeCompleto: String,
    empresa: String,
    email: String,
    celular: String,
    tipo: String,
    descreva: String
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Form', FormSchema);
