import type { Meta, StoryObj } from '@storybook/react';

import Grid4x4Outlined from '../../lib/device/Grid4x4Outlined';

const meta: Meta<typeof Grid4x4Outlined> = {
  component: Grid4x4Outlined,
  tags: ['autodocs'],
  title: 'device/Grid4x4Outlined',
};

export default meta;
type Story = StoryObj<typeof Grid4x4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
