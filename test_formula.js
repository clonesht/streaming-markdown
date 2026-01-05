import * as smd from "./smd.js"

let renderer = smd.logger_renderer();
let parser = smd.parser(renderer);

console.log("------");

parser = smd.parser(renderer);
smd.parser_write(parser, "$\\text{Total Memory}$\n\n## Head\n\n Text `code`")
smd.parser_end(parser)

console.log("------");

parser = smd.parser(renderer);
smd.parser_write(parser, "$ \\text{Total Memory} $\n\n## Head\n\n Text `code`")
smd.parser_end(parser)

console.log("------");

parser = smd.parser(renderer);
smd.parser_write(parser, "$$\\text{Total Memory}$$\n\n## Head\n\n Text `code`")
smd.parser_end(parser)


console.log("------");

parser = smd.parser(renderer);
smd.parser_write(parser, "$$ \\text{Total Memory} $$\n\n## Head\n\n Text `code`")
smd.parser_end(parser)
