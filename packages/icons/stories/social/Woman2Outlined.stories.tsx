import type { Meta, StoryObj } from '@storybook/react';

import Woman2Outlined from '../../lib/social/Woman2Outlined';

const meta: Meta<typeof Woman2Outlined> = {
  component: Woman2Outlined,
  tags: ['autodocs'],
  title: 'social/Woman2Outlined',
};

export default meta;
type Story = StoryObj<typeof Woman2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
