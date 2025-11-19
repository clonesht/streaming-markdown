import * as smd from "./smd.js"

let test_md = `
- List starts:
  - \`\`\`python
    code = 1
    print(code)
    \`\`\`
`

let test_md2 = `

### Quick fixes
- Prefer the Windows Selector loop policy at process start to avoid Proactor-specific shutdown issues:
  - Add before creating the loop or calling asyncio APIs:
    - This is a code:
      \`\`\`python
      import asyncio, platform

      if platform.system() == "Windows":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
      \`\`\`
    This switches to the selector-based loop, which avoids the Proactor transport code path causing these
`

let test_md3 = `
my code:

\`\`\`python
    code = 1

    print(code)
\`\`\`
`


let renderer = smd.logger_renderer();
let parser = smd.parser(renderer);
smd.parser_write(parser, test_md)
smd.parser_end(parser)

console.log("----")

renderer = smd.logger_renderer();
parser = smd.parser(renderer);
smd.parser_write(parser, test_md2)
smd.parser_end(parser)


console.log("----")

renderer = smd.logger_renderer();
parser = smd.parser(renderer);
smd.parser_write(parser, test_md3)
smd.parser_end(parser)