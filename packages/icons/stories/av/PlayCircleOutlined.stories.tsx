import type { Meta, StoryObj } from '@storybook/react';

import PlayCircleOutlined from '../../lib/av/PlayCircleOutlined';

const meta: Meta<typeof PlayCircleOutlined> = {
  component: PlayCircleOutlined,
  tags: ['autodocs'],
  title: 'av/PlayCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof PlayCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
