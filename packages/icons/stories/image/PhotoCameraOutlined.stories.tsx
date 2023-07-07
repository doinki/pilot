import type { Meta, StoryObj } from '@storybook/react';

import PhotoCameraOutlined from '../../lib/image/PhotoCameraOutlined';

const meta: Meta<typeof PhotoCameraOutlined> = {
  component: PhotoCameraOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoCameraOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoCameraOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
