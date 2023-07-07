import type { Meta, StoryObj } from '@storybook/react';

import VolumeOffOutlined from '../../lib/av/VolumeOffOutlined';

const meta: Meta<typeof VolumeOffOutlined> = {
  component: VolumeOffOutlined,
  tags: ['autodocs'],
  title: 'av/VolumeOffOutlined',
};

export default meta;
type Story = StoryObj<typeof VolumeOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
