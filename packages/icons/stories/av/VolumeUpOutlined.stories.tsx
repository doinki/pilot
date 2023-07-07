import type { Meta, StoryObj } from '@storybook/react';

import VolumeUpOutlined from '../../lib/av/VolumeUpOutlined';

const meta: Meta<typeof VolumeUpOutlined> = {
  component: VolumeUpOutlined,
  tags: ['autodocs'],
  title: 'av/VolumeUpOutlined',
};

export default meta;
type Story = StoryObj<typeof VolumeUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
