import type { Meta, StoryObj } from '@storybook/react';

import AddToQueueOutlined from '../../lib/av/AddToQueueOutlined';

const meta: Meta<typeof AddToQueueOutlined> = {
  component: AddToQueueOutlined,
  tags: ['autodocs'],
  title: 'av/AddToQueueOutlined',
};

export default meta;
type Story = StoryObj<typeof AddToQueueOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
