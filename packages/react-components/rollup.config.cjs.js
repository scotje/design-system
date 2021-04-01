import configCommon from './rollup.config.common'

const config = Object.assign(
  {
    input: 'source/index.js',
    output: [
      {
        dir: 'build',
        format: 'cjs',
      },
    ],
  },
  configCommon,
)

export default config
