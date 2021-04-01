import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import autoExternal from 'rollup-plugin-auto-external'
import resolve from '@rollup/plugin-node-resolve'
//import reactSvg from 'rollup-plugin-react-svg'
//import url from 'rollup-plugin-url'
//import { string } from 'rollup-plugin-string'
import { terser } from 'rollup-plugin-terser'
//import copy from 'rollup-plugin-copy'

// import pkg from './package.json'
//const { getSVGOConfig } = require('./scripts/getSVGOConfig')

const MAX_INLINE_FILE_SIZE_KB = 10

export default {
  plugins: [
/*
    copy({
      targets: [
        {
          src: 'src/assets/*',
          dest: 'dist/assets',
        },
      ],
    }),
*/
    autoExternal(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
/*
    reactSvg({
      svgo: getSVGOConfig(),
    }),
*/
/*
    url({
      limit: MAX_INLINE_FILE_SIZE_KB * 1024,
      include: ['**\/*.woff', '**\/*.woff2'],
    }),
*/
/*
    string({
      include: '**\/*.css',
    }),
*/
    terser(),
  ],
}

