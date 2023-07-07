import type { Meta, StoryObj } from '@storybook/react';

import MotionPhotosAutoOutlined from '../../lib/image/MotionPhotosAutoOutlined';

const meta: Meta<typeof MotionPhotosAutoOutlined> = {
  component: MotionPhotosAutoOutlined,
  tags: ['autodocs'],
  title: 'image/MotionPhotosAutoOutlined',
};

export default meta;
type Story = StoryObj<typeof MotionPhotosAutoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
