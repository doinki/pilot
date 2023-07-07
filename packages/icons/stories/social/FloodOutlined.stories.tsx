import type { Meta, StoryObj } from '@storybook/react';

import FloodOutlined from '../../lib/social/FloodOutlined';

const meta: Meta<typeof FloodOutlined> = {
  component: FloodOutlined,
  tags: ['autodocs'],
  title: 'social/FloodOutlined',
};

export default meta;
type Story = StoryObj<typeof FloodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
