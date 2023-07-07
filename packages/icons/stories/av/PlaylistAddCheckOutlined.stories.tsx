import type { Meta, StoryObj } from '@storybook/react';

import PlaylistAddCheckOutlined from '../../lib/av/PlaylistAddCheckOutlined';

const meta: Meta<typeof PlaylistAddCheckOutlined> = {
  component: PlaylistAddCheckOutlined,
  tags: ['autodocs'],
  title: 'av/PlaylistAddCheckOutlined',
};

export default meta;
type Story = StoryObj<typeof PlaylistAddCheckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
