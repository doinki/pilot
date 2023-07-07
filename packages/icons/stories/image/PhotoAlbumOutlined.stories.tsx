import type { Meta, StoryObj } from '@storybook/react';

import PhotoAlbumOutlined from '../../lib/image/PhotoAlbumOutlined';

const meta: Meta<typeof PhotoAlbumOutlined> = {
  component: PhotoAlbumOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoAlbumOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoAlbumOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
