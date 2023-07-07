import type { Meta, StoryObj } from '@storybook/react';

import PlaylistAddCircleOutlined from '../../lib/av/PlaylistAddCircleOutlined';

const meta: Meta<typeof PlaylistAddCircleOutlined> = {
  component: PlaylistAddCircleOutlined,
  tags: ['autodocs'],
  title: 'av/PlaylistAddCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof PlaylistAddCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
