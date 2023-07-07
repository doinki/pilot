import type { Meta, StoryObj } from '@storybook/react';

import PhotoSizeSelectSmallOutlined from '../../lib/image/PhotoSizeSelectSmallOutlined';

const meta: Meta<typeof PhotoSizeSelectSmallOutlined> = {
  component: PhotoSizeSelectSmallOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoSizeSelectSmallOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoSizeSelectSmallOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
