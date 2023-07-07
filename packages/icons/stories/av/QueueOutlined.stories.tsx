import type { Meta, StoryObj } from '@storybook/react';

import QueueOutlined from '../../lib/av/QueueOutlined';

const meta: Meta<typeof QueueOutlined> = {
  component: QueueOutlined,
  tags: ['autodocs'],
  title: 'av/QueueOutlined',
};

export default meta;
type Story = StoryObj<typeof QueueOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
