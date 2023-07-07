import type { Meta, StoryObj } from '@storybook/react';

import PlaylistPlayOutlined from '../../lib/av/PlaylistPlayOutlined';

const meta: Meta<typeof PlaylistPlayOutlined> = {
  component: PlaylistPlayOutlined,
  tags: ['autodocs'],
  title: 'av/PlaylistPlayOutlined',
};

export default meta;
type Story = StoryObj<typeof PlaylistPlayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
