import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const isProduction = process.env.NODE_ENV === 'production';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * @type {import('rollup').RollupOptions[]}
 */
const rollupConfig = [
  {
    external: [/dist/, /node_modules/],
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      entryFileNames: '[name].mjs',
      preserveModules: true,
      sourcemap: true,
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [['@babel/plugin-transform-runtime', { version: '^7.22.5' }]],
        presets: [
          ['@babel/preset-env', { browserslistEnv: process.env.NODE_ENV }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      }),
      nodeResolve({ extensions }),
      typescript({
        compilerOptions: {
          declarationDir: 'dist',
          emitDeclarationOnly: true,
          noEmit: false,
        },
        noForceEmit: true,
        tsconfig: 'tsconfig.build.json',
      }),
      isProduction && terser(),
    ],
  },
  {
    external: [/dist/, /node_modules/],
    input: 'src/index.ts',
    output: {
      dir: 'dist/node',
      format: 'cjs',
      preserveModules: true,
      sourcemap: true,
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [['@babel/plugin-transform-runtime', { version: '^7.22.5' }]],
        presets: [
          ['@babel/preset-env', { browserslistEnv: 'node' }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      }),
      nodeResolve({ extensions }),
    ],
  },
];

export default rollupConfig;
