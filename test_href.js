import * as smd from "./smd.js"

let test_md = `
  Product link: https://www.npmjs.com/package/fpsmeter[3]
`


let renderer = smd.logger_renderer();
let parser = smd.parser(renderer);
smd.parser_write(parser, test_md)
smd.parser_end(parser)

