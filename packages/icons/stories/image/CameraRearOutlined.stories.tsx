import type { Meta, StoryObj } from '@storybook/react';

import CameraRearOutlined from '../../lib/image/CameraRearOutlined';

const meta: Meta<typeof CameraRearOutlined> = {
  component: CameraRearOutlined,
  tags: ['autodocs'],
  title: 'image/CameraRearOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraRearOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
