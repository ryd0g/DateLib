import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
      file: 'umd/date-lib.js',
      format: 'umd',
      name: 'DateLib',
      esModule: false,
    },
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm',
    },
  },
];
