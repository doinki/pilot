import type { Meta, StoryObj } from '@storybook/react';

import MotionPhotosOnOutlined from '../../lib/image/MotionPhotosOnOutlined';

const meta: Meta<typeof MotionPhotosOnOutlined> = {
  component: MotionPhotosOnOutlined,
  tags: ['autodocs'],
  title: 'image/MotionPhotosOnOutlined',
};

export default meta;
type Story = StoryObj<typeof MotionPhotosOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
