import type { Meta, StoryObj } from '@storybook/react';

import Stack from './Stack';

const meta: Meta<typeof Stack> = {
  argTypes: {
    direction: {
      control: 'radio',
      options: ['column', 'column-reverse', 'row', 'row-reverse'],
    },
  },
  args: {
    children: [
      <div key={1}>1</div>,
      <div key={2}>2</div>,
      <div key={3}>3</div>,
    ],
    className: 'gap-4',
  },
  component: Stack,
  tags: ['autodocs'],
  title: 'ui/Stack',
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const DirectionColumn: Story = { args: { direction: 'column' } };
export const DirectionColumnReverse: Story = {
  args: { direction: 'column-reverse' },
};
export const DirectionRow: Story = { args: { direction: 'row' } };
export const DirectionRowReverse: Story = {
  args: { direction: 'row-reverse' },
};

export const Divider: Story = { args: { divider: <hr /> } };
