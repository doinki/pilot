import type { Meta, StoryObj } from '@storybook/react';

import PlayCircleOutlineOutlined from '../../lib/av/PlayCircleOutlineOutlined';

const meta: Meta<typeof PlayCircleOutlineOutlined> = {
  component: PlayCircleOutlineOutlined,
  tags: ['autodocs'],
  title: 'av/PlayCircleOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof PlayCircleOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
