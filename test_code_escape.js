import * as smd from "./smd.js"

let test_md = "this is a code: `anything \\`escaped\\` not`, and this is done."

console.log(test_md);
let renderer = smd.logger_renderer();
let parser = smd.parser(renderer);
smd.parser_write(parser, test_md)
smd.parser_end(parser)
