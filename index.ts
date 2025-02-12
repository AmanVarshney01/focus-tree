#!/usr/bin/env node
import { run, command, positional } from "@drizzle-team/brocli";

const tree = [
  '    *    ',
  '   ***   ',
  '  *****  ',
  ' ******* ',
  '*********',
  '    |    ',
  '    |    '
];

function growTree() {
  const treeHeight = tree.length;
  let revealedLines = 0;

  const interval = setInterval(() => {
    if (revealedLines < treeHeight) {
      console.clear();
      for (let i = 0; i < treeHeight; i++) {
        if (i < treeHeight - revealedLines) {
          console.log(' '.repeat(tree[i]?.length ?? 0));
        } else {
          console.log(tree[i]);
        }
      }
      revealedLines++;
    } else {
      clearInterval(interval);
      console.log('Tree fully revealed!');
    }
  }, 1000);
}


const echo = command({
  name: "echo",
  options: {
    text: positional().desc("Text to echo").default("echo"),
  },
  handler: (opts) => {
    console.log(opts.text);
  
    growTree();
  },
});

run([echo]);
