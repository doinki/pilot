import type { Meta, StoryObj } from '@storybook/react';

import Man2Outlined from '../../lib/social/Man2Outlined';

const meta: Meta<typeof Man2Outlined> = {
  component: Man2Outlined,
  tags: ['autodocs'],
  title: 'social/Man2Outlined',
};

export default meta;
type Story = StoryObj<typeof Man2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
