import type { Meta, StoryObj } from '@storybook/react';

import WallpaperOutlined from '../../lib/device/WallpaperOutlined';

const meta: Meta<typeof WallpaperOutlined> = {
  component: WallpaperOutlined,
  tags: ['autodocs'],
  title: 'device/WallpaperOutlined',
};

export default meta;
type Story = StoryObj<typeof WallpaperOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
