import type { Meta, StoryObj } from '@storybook/react';

import MotionPhotosPausedOutlined from '../../lib/image/MotionPhotosPausedOutlined';

const meta: Meta<typeof MotionPhotosPausedOutlined> = {
  component: MotionPhotosPausedOutlined,
  tags: ['autodocs'],
  title: 'image/MotionPhotosPausedOutlined',
};

export default meta;
type Story = StoryObj<typeof MotionPhotosPausedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
