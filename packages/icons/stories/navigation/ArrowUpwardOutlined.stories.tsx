import type { Meta, StoryObj } from '@storybook/react';

import ArrowUpwardOutlined from '../../lib/navigation/ArrowUpwardOutlined';

const meta: Meta<typeof ArrowUpwardOutlined> = {
  component: ArrowUpwardOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowUpwardOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowUpwardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
