"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brocli_1 = require("@drizzle-team/brocli");
var echo = (0, brocli_1.command)({
    name: "echo",
    options: {
        text: (0, brocli_1.positional)().desc("Text to echo").default("echo"),
    },
    handler: function (opts) {
        console.log(opts.text);
    },
});
(0, brocli_1.run)([echo]);
