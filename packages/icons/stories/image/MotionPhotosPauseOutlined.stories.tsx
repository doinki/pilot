import type { Meta, StoryObj } from '@storybook/react';

import MotionPhotosPauseOutlined from '../../lib/image/MotionPhotosPauseOutlined';

const meta: Meta<typeof MotionPhotosPauseOutlined> = {
  component: MotionPhotosPauseOutlined,
  tags: ['autodocs'],
  title: 'image/MotionPhotosPauseOutlined',
};

export default meta;
type Story = StoryObj<typeof MotionPhotosPauseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
