import type { Meta, StoryObj } from '@storybook/react';

import QueuePlayNextOutlined from '../../lib/av/QueuePlayNextOutlined';

const meta: Meta<typeof QueuePlayNextOutlined> = {
  component: QueuePlayNextOutlined,
  tags: ['autodocs'],
  title: 'av/QueuePlayNextOutlined',
};

export default meta;
type Story = StoryObj<typeof QueuePlayNextOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
