import type { Meta, StoryObj } from '@storybook/react';

import PhotoCameraBackOutlined from '../../lib/image/PhotoCameraBackOutlined';

const meta: Meta<typeof PhotoCameraBackOutlined> = {
  component: PhotoCameraBackOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoCameraBackOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoCameraBackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
