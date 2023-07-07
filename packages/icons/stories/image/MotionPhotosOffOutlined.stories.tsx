import type { Meta, StoryObj } from '@storybook/react';

import MotionPhotosOffOutlined from '../../lib/image/MotionPhotosOffOutlined';

const meta: Meta<typeof MotionPhotosOffOutlined> = {
  component: MotionPhotosOffOutlined,
  tags: ['autodocs'],
  title: 'image/MotionPhotosOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MotionPhotosOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
