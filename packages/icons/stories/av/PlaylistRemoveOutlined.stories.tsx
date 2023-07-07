import type { Meta, StoryObj } from '@storybook/react';

import PlaylistRemoveOutlined from '../../lib/av/PlaylistRemoveOutlined';

const meta: Meta<typeof PlaylistRemoveOutlined> = {
  component: PlaylistRemoveOutlined,
  tags: ['autodocs'],
  title: 'av/PlaylistRemoveOutlined',
};

export default meta;
type Story = StoryObj<typeof PlaylistRemoveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
