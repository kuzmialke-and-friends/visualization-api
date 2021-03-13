"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = require("./routes/router");
const app = new koa_1.default();
app.use(router_1.router.routes);
app.listen(3000);
//# sourceMappingURL=index.js.map