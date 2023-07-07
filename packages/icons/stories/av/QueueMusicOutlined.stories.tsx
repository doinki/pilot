import type { Meta, StoryObj } from '@storybook/react';

import QueueMusicOutlined from '../../lib/av/QueueMusicOutlined';

const meta: Meta<typeof QueueMusicOutlined> = {
  component: QueueMusicOutlined,
  tags: ['autodocs'],
  title: 'av/QueueMusicOutlined',
};

export default meta;
type Story = StoryObj<typeof QueueMusicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
