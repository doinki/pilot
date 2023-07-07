import type { Meta, StoryObj } from '@storybook/react';

import PhotoSizeSelectLargeOutlined from '../../lib/image/PhotoSizeSelectLargeOutlined';

const meta: Meta<typeof PhotoSizeSelectLargeOutlined> = {
  component: PhotoSizeSelectLargeOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoSizeSelectLargeOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoSizeSelectLargeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
