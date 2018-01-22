
const fs      = require("fs");

const pegjs   = require("pegjs"),
      tspegjs = require("ts-pegjs");

const grammar = `${fs.readFileSync("./grammar.peg")}`;





var parser = pegjs.generate(grammar, {

  output  : "source",
  format  : "commonjs",
  plugins : [tspegjs],
  tspegjs : {}

});

fs.writeFileSync('./build/gen/parser.ts', parser);
