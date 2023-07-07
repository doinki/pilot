import type { Meta, StoryObj } from '@storybook/react';

import AlbumOutlined from '../../lib/av/AlbumOutlined';

const meta: Meta<typeof AlbumOutlined> = {
  component: AlbumOutlined,
  tags: ['autodocs'],
  title: 'av/AlbumOutlined',
};

export default meta;
type Story = StoryObj<typeof AlbumOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
