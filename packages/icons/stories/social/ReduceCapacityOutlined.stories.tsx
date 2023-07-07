import type { Meta, StoryObj } from '@storybook/react';

import ReduceCapacityOutlined from '../../lib/social/ReduceCapacityOutlined';

const meta: Meta<typeof ReduceCapacityOutlined> = {
  component: ReduceCapacityOutlined,
  tags: ['autodocs'],
  title: 'social/ReduceCapacityOutlined',
};

export default meta;
type Story = StoryObj<typeof ReduceCapacityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
