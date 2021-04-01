import configCommon from './rollup.config.common'
import { readFileSync } from 'fs'

const chunkArray = readFileSync('./source/index.js', 'utf8')
  .split('\n') // -> all lines
  .filter(line => line.startsWith('export ')) // -> lines which export something
  .map(line => 'source/' + /.* from ('|")(\.\/|~)?(.*)('|").*/g.exec(line)[3]) // -> module paths

const input = {
  index: 'source/index.js',
}

chunkArray.forEach(path => {
  const name = path // 'yolo/FooBar'
    .split('/') // -> ['yolo', 'FooBar']
    .pop() // -> 'FooBar'
    .replace(/^\w/, c => c.toLowerCase()) // -> 'fooBar'
  input[name] = path
})

const config = Object.assign(
  {
    input,
    output: [
      {
        dir: 'build/es',
        format: 'es',
      },
    ],
  },
  configCommon,
)

export default config
