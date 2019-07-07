"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
const homeRouter = express_1.Router();
homeRouter.get("/", (req, res, next) => {
    next(http_errors_1.default(500));
});
exports.default = homeRouter;
//# sourceMappingURL=home.js.map