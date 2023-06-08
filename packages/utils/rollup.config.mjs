import typescript from '@rollup/plugin-typescript';
import { swc } from 'rollup-plugin-swc3';

const external = [/dist/, /node_modules/, 'fs', 'path'];
const input = 'src/index.ts';
const tsconfig = 'tsconfig.build.json';

/**
 * @type {import('rollup').RollupOptions[]}
 */
const rollupConfig = [
  {
    external,
    input,
    output: {
      dir: 'dist',
      entryFileNames: '[name].mjs',
      preserveModules: true,
      sourcemap: true,
    },
    plugins: [
      swc({
        env: { targets: 'defaults and supports bigint' },
        jsc: { externalHelpers: true },
        sourceMaps: true,
        tsconfig,
      }),
      typescript({
        compilerOptions: {
          declarationDir: 'dist',
          emitDeclarationOnly: true,
          noEmit: false,
        },
        noForceEmit: true,
        tsconfig,
      }),
    ],
  },
  {
    external,
    input,
    output: {
      dir: 'dist/node',
      format: 'cjs',
      preserveModules: true,
      sourcemap: true,
    },
    plugins: [
      swc({
        env: { targets: 'node 18' },
        jsc: { externalHelpers: true },
        sourceMaps: true,
        tsconfig,
      }),
    ],
  },
];

export default rollupConfig;
