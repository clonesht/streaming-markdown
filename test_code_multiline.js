import * as smd from "./smd.js"

let test_md = `
# Hello

\`\`\`
this is
a multiline
anycode(\`\`\`
that should not end
\`\`\`

done

one line \`\`\`anything\`\`\` is this
`

console.log(test_md);
let renderer = smd.logger_renderer();
let parser = smd.parser(renderer);
smd.parser_write(parser, test_md)
smd.parser_end(parser)
