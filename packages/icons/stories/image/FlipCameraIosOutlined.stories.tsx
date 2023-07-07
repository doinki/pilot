import type { Meta, StoryObj } from '@storybook/react';

import FlipCameraIosOutlined from '../../lib/image/FlipCameraIosOutlined';

const meta: Meta<typeof FlipCameraIosOutlined> = {
  component: FlipCameraIosOutlined,
  tags: ['autodocs'],
  title: 'image/FlipCameraIosOutlined',
};

export default meta;
type Story = StoryObj<typeof FlipCameraIosOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
