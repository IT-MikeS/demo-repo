import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'build/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      preferConst: true,
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  plugins: [nodeResolve()],
};
