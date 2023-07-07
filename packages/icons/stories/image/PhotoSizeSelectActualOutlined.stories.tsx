import type { Meta, StoryObj } from '@storybook/react';

import PhotoSizeSelectActualOutlined from '../../lib/image/PhotoSizeSelectActualOutlined';

const meta: Meta<typeof PhotoSizeSelectActualOutlined> = {
  component: PhotoSizeSelectActualOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoSizeSelectActualOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoSizeSelectActualOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
