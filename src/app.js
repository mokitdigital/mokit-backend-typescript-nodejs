"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var ts_dotenv_1 = require("ts-dotenv");
var routes_1 = __importDefault(require("./routes"));
var env = ts_dotenv_1.load({
    MONGODB_URL: String
});
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.middlewares();
        this.database();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    };
    App.prototype.database = function () {
        mongoose_1.default.connect(env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose_1.default.connection.on('error', console.error.bind(console, 'Error connecting to the database: '));
        mongoose_1.default.connection.once('open', function () {
            console.log("Database connect!");
        });
    };
    App.prototype.routes = function () {
        this.express.use(routes_1.default);
    };
    return App;
}());
exports.default = new App().express;
