import type { Meta, StoryObj } from '@storybook/react';

import PlaylistAddOutlined from '../../lib/av/PlaylistAddOutlined';

const meta: Meta<typeof PlaylistAddOutlined> = {
  component: PlaylistAddOutlined,
  tags: ['autodocs'],
  title: 'av/PlaylistAddOutlined',
};

export default meta;
type Story = StoryObj<typeof PlaylistAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
