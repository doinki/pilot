import typescript from '@rollup/plugin-typescript';
import { swc } from 'rollup-plugin-swc3';

const external = [/node_modules/, 'fs', 'path'];
const input = 'dist/index.ts';
const tsconfig = 'tsconfig.build.json';

/**
 * @type {import('rollup').RollupOptions[]}
 */
const rollupConfig = [
  {
    external,
    input,
    output: {
      dir: 'lib',
      entryFileNames: '[name].mjs',
      preserveModules: true,
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
          declarationDir: 'lib',
          emitDeclarationOnly: true,
          noEmit: false,
        },
        noForceEmit: true,
        tsconfig: 'tsconfig.build.json',
      }),
    ],
  },
  {
    external,
    input,
    output: {
      dir: 'lib/node',
      format: 'cjs',
      preserveModules: true,
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
