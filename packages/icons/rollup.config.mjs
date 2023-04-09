import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * @type {import('rollup').RollupOptions[]}
 */
const rollupConfig = [
  {
    external: [/node_modules/],
    input: 'src/index.ts',
    output: { dir: 'dist', format: 'esm', preserveModules: true },
    plugins: [
      typescript({
        emitDeclarationOnly: true,
        noEmit: false,
        outDir: 'dist',
        tsconfig: 'tsconfig.build.json',
      }),
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [['@babel/plugin-transform-runtime', { version: '^7.21.0' }]],
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      }),
      nodeResolve({ extensions }),
    ],
  },
  {
    external: [/node_modules/],
    input: 'src/index.ts',
    output: { dir: 'dist/cjs', format: 'cjs', preserveModules: true },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [['@babel/plugin-transform-runtime', { version: '^7.21.0' }]],
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      }),
      nodeResolve({ extensions }),
    ],
  },
];

export default rollupConfig;
