import type { Meta, StoryObj } from '@storybook/react';

import FlipCameraAndroidOutlined from '../../lib/image/FlipCameraAndroidOutlined';

const meta: Meta<typeof FlipCameraAndroidOutlined> = {
  component: FlipCameraAndroidOutlined,
  tags: ['autodocs'],
  title: 'image/FlipCameraAndroidOutlined',
};

export default meta;
type Story = StoryObj<typeof FlipCameraAndroidOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
