import * as smd from "./smd.js"

let renderer = smd.logger_renderer();
let parser = smd.parser(renderer);
smd.parser_write(parser, "hello, ")
smd.parser_write(parser, "this is")
console.log("...")
smd.parser_write(parser, "a text")
smd.parser_end(parser)