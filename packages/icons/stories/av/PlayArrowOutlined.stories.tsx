import type { Meta, StoryObj } from '@storybook/react';

import PlayArrowOutlined from '../../lib/av/PlayArrowOutlined';

const meta: Meta<typeof PlayArrowOutlined> = {
  component: PlayArrowOutlined,
  tags: ['autodocs'],
  title: 'av/PlayArrowOutlined',
};

export default meta;
type Story = StoryObj<typeof PlayArrowOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
