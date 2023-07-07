import type { Meta, StoryObj } from '@storybook/react';

import Grid3x3Outlined from '../../lib/device/Grid3x3Outlined';

const meta: Meta<typeof Grid3x3Outlined> = {
  component: Grid3x3Outlined,
  tags: ['autodocs'],
  title: 'device/Grid3x3Outlined',
};

export default meta;
type Story = StoryObj<typeof Grid3x3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
