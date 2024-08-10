#!/usr/bin/env node
import { run, command, positional } from "@drizzle-team/brocli";

const echo = command({
  name: "echo",
  options: {
    text: positional().desc("Text to echo").default("echo"),
  },
  handler: (opts) => {
    console.log(opts.text);
  },
});

run([echo]);
