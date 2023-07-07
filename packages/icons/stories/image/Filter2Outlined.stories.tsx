import type { Meta, StoryObj } from '@storybook/react';

import Filter2Outlined from '../../lib/image/Filter2Outlined';

const meta: Meta<typeof Filter2Outlined> = {
  component: Filter2Outlined,
  tags: ['autodocs'],
  title: 'image/Filter2Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
