import type { Meta, StoryObj } from '@storybook/react';

import PhotoCameraFrontOutlined from '../../lib/image/PhotoCameraFrontOutlined';

const meta: Meta<typeof PhotoCameraFrontOutlined> = {
  component: PhotoCameraFrontOutlined,
  tags: ['autodocs'],
  title: 'image/PhotoCameraFrontOutlined',
};

export default meta;
type Story = StoryObj<typeof PhotoCameraFrontOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
