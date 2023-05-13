import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const isDevelopment = process.env.NODE_ENV === 'development';
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
      format: 'esm',
      preserveModules: true,
      sourcemap: isDevelopment,
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [['@babel/plugin-transform-runtime', { version: '^7.21.5' }]],
        presets: [
          ['@babel/preset-env', { browserslistEnv: process.env.NODE_ENV }],
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
      sourcemap: isDevelopment,
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [['@babel/plugin-transform-runtime', { version: '^7.21.5' }]],
        presets: [
          ['@babel/preset-env', { browserslistEnv: 'node' }],
          '@babel/preset-typescript',
        ],
      }),
      nodeResolve({ extensions }),
    ],
  },
];

export default rollupConfig;
