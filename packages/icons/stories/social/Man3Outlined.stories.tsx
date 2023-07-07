import type { Meta, StoryObj } from '@storybook/react';

import Man3Outlined from '../../lib/social/Man3Outlined';

const meta: Meta<typeof Man3Outlined> = {
  component: Man3Outlined,
  tags: ['autodocs'],
  title: 'social/Man3Outlined',
};

export default meta;
type Story = StoryObj<typeof Man3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
