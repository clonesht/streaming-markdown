import * as smd from "./smd.js"

let renderer = smd.logger_renderer();
let parser = smd.parser(renderer);
smd.parser_write(parser, "a_this_")
smd.parser_end(parser)

console.log("---")

parser = smd.parser(renderer);
smd.parser_write(parser, "but\n_this_")
smd.parser_end(parser)

console.log("---")

parser = smd.parser(renderer);
smd.parser_write(parser, "_this_")
smd.parser_end(parser)

console.log("---")

parser = smd.parser(renderer);
smd.parser_write(parser, "this is a list:\n\n - _this_")
smd.parser_end(parser)