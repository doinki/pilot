import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { capitalize, getAllFilePaths } from '@pilot/utils';

const __dirname = dirname(fileURLToPath(import.meta.url));

const outlined = Array.from(
  getAllFilePaths(join(__dirname, '..', 'material-design-icons'))
).filter((path) => path.includes('materialiconsoutlined'));

const metadata = outlined
  .map((path) => path.split('material-design-icons')[1])
  .map((path) => {
    const segments = path
      .split(sep)
      .filter((segment) => segment !== 'materialiconsoutlined');

    if (segments.length !== 4) {
      throw new Error();
    }

    return segments;
  })
  .map((segments) => {
    const name = `${segments[2].split('_').map(capitalize).join('')}Outlined`;

    if (/^\d/.test(name)) {
      console.warn(`[WARN] ${name} starts with a number`);
    }

    return {
      category: segments[1],
      name: name
        .replace(/^123/, 'OneTwoThree')
        .replace(/^3d/, 'ThreeD')
        .replace(/^10k/, 'TenK')
        .replace(/^1k/, 'OneK')
        .replace(/^2k/, 'TwoK')
        .replace(/^3k/, 'ThreeK')
        .replace(/^4k/, 'FourK')
        .replace(/^5g/, 'FiveG')
        .replace(/^5k/, 'FiveK')
        .replace(/^6k/, 'SixK')
        .replace(/^7k/, 'SevenK')
        .replace(/^8k/, 'EightK')
        .replace(/^9k/, 'NineK')
        .replace(/^3p/, 'ThreeP')
        .replace(/^1x/, 'TimesOne')
        .replace(/^30fps/, 'ThirtyFps')
        .replace(/^3g/, 'ThreeG')
        .replace(/^4g/, 'FourG')
        .replace(/^60fps/, 'SixtyFps')
        .replace(/^10mp/, 'TenMp')
        .replace(/^11mp/, 'ElevenMp')
        .replace(/^12mp/, 'TwelveMp')
        .replace(/^13mp/, 'ThirteenMp')
        .replace(/^14mp/, 'FourteenMp')
        .replace(/^15mp/, 'FifteenMp')
        .replace(/^16mp/, 'SixteenMp')
        .replace(/^17mp/, 'SeventeenMp')
        .replace(/^18mp/, 'EighteenMp')
        .replace(/^19mp/, 'NineteenMp')
        .replace(/^20mp/, 'TwentyMp')
        .replace(/^21mp/, 'TwentyOneMp')
        .replace(/^22mp/, 'TwentyTwoMp')
        .replace(/^23mp/, 'TwentyThreeMp')
        .replace(/^24mp/, 'TwentyFourMp')
        .replace(/^2mp/, 'TwoMp')
        .replace(/^3mp/, 'ThreeMp')
        .replace(/^4mp/, 'FourMp')
        .replace(/^5mp/, 'FiveMp')
        .replace(/^6mp/, 'SixMp')
        .replace(/^7mp/, 'SevenMp')
        .replace(/^8mp/, 'EightMp')
        .replace(/^9mp/, 'NineMp')
        .replace(/^360/, 'ThreeSixty')
        .replace(/^18Up/, 'EighteenUp')
        .replace(/^6Ft/, 'SixFt'),
    };
  });

metadata.forEach(({ category }) => {
  rmSync(join(__dirname, '..', 'dist', category), {
    force: true,
    recursive: true,
  });
  rmSync(join(__dirname, '..', 'stories', category), {
    force: true,
    recursive: true,
  });
  mkdirSync(join(__dirname, '..', 'dist', category), { recursive: true });
  mkdirSync(join(__dirname, '..', 'stories', category), { recursive: true });
});

const icons = await Promise.all(
  outlined.map((path) => readFile(path, 'utf-8'))
);

icons.forEach((icon, index) => {
  const { category, name } = metadata[index];

  writeFileSync(
    join(__dirname, '..', 'dist', category, `${name}.tsx`),
    `import type { SVGProps } from "react";
import { forwardRef } from "react";

const ${name} = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return ${icon
    .replace('enable-background="new 0 0 24 24"', '')
    .replace('enable-background="new"', '')
    .replace(/fill-rule/g, 'fillRule')
    .replace('>', 'ref={ref} {...props}>')}
});

export default ${name};
`
  );

  writeFileSync(
    join(__dirname, '..', 'stories', category, `${name}.stories.tsx`),
    `import type { Meta, StoryObj } from '@storybook/react';

import ${name} from '../../lib/${category}/${name}';

const meta: Meta<typeof ${name}> = {
  component: ${name},
  tags: ['autodocs'],
  title: '${category}/${name}',
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
`
  );
});

const categories = Array.from(
  new Set(metadata.map(({ category }) => category))
);

categories.forEach((category) => {
  const files = readdirSync(join(__dirname, '..', 'dist', category));

  writeFileSync(
    join(__dirname, '..', 'dist', category, 'index.ts'),
    `
${files
  .map((file) => {
    const name = file.replace(/\.tsx$/, '');

    return `export { default as ${name} } from './${name}';`;
  })
  .join('\n')}
`.trim()
  );
});

writeFileSync(
  join(__dirname, '..', 'dist', 'index.ts'),
  `
${categories.reduce((acc, category) => {
  return `${acc}export * from './${category}';\n`;
}, '')}
`.trim()
);
