import type { Meta, StoryObj } from '@storybook/react';

import RemoveFromQueueOutlined from '../../lib/av/RemoveFromQueueOutlined';

const meta: Meta<typeof RemoveFromQueueOutlined> = {
  component: RemoveFromQueueOutlined,
  tags: ['autodocs'],
  title: 'av/RemoveFromQueueOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveFromQueueOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
